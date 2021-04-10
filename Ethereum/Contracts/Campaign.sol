pragma solidity ^0.4.17;

contract CampaignFactory{

    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum,string camName, string camDesc) public {
        address newCampaign = new Campaign(minimum,msg.sender,camName,camDesc);
        deployedCampaigns.push(newCampaign);
    }
   
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
    
}

contract Campaign{
   
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    string public campaignName;
    string public campaignDescription;


    modifier authorization(){
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator, string camName, string camDesc) public {
        manager = creator;
        minimumContribution = minimum;
        campaignName = camName;
        campaignDescription = camDesc;
    }
  
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        if(approvers[msg.sender]!= true){
            approvers[msg.sender] = true;
            approversCount++;
        }
    }
  
    function createRequest(string description, uint value, address recipient)
        public authorization{
            Request memory newReq = Request({
                description : description,
                value : value,
                recipient : recipient,
                complete : false,
                approvalCount : 0
            });
            
            requests.push(newReq);
        }
  
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        require(!request.complete);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
  
    function finalizeRequest(uint index) public authorization{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address, string, string
        ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager,
            campaignName,
            campaignDescription
            ); 
    }

    function getRequestsCount() public view returns (uint) {
        return  requests.length;
    }
    
}