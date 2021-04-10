import React, {Component} from 'react';
import { Card, Button ,Icon,Header, Label,Grid, Image,Segment, Step} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';
import Campaign from '../Ethereum/campaign';


class CampaignIndex extends Component {
	static async getInitialProps(){
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		console.log(campaigns);
		return { 
			campaigns
		};
		
	}
	async getData(address){
		const campaign = Campaign(address);
		const summary = await campaign.methods.getSummary().call();
		console.log(summary)
		return{
			campName: summary[5],
			campDesc: summary[6]
		}
	}

	// address
	renderCampaigns() {
		const {
            campName,
            campDesc
        } = this.props
		const items = this.props.campaigns.map(address => {
			// this.getData(address)
			let x = this.getData(address)
			let y = Promise.resolve(x)
			y.then(function(result){
				console.log(result)
				return result.campName
			});
			// console.log(a)
			return {
				header:"Campaign",
				meta:address,
				description:(
					<Image src='../static/campImage.png' wrapped ui={true} />
				),
				extra:(
					<Link route={`/campaigns/${address}`}>
					<div className='ui two buttons'>
							<Button basic color='green'>
							<a><p style={{color:'teal'}}>View Campaign</p></a>
							</Button>
					</div>
					</Link>
				),
				style: { overflowWrap: 'break-word', width:365 }
				// ,
				// fluid: true
			};
		});
		
		return <Card.Group items={items}/>;
	}
	
	render(){
		return (
			<Layout>
				<div>
					<div>
					
					<img src='../static/crowdfunding.png' style={{width:430, height:350, marginLeft:40, marginTop:20}}/>
						<section style={{maxWidth:550, color:'grey',marginLeft:550,marginTop:-250}}>
							<h1>Fundraising for disaster relief: support friends and family at a time when they need it most, raise money for them without an intermediary.</h1>
						</section>
						<Segment style={{marginTop:200, height:200}} padded raised color='green'>
							<Header as='h2' textAlign='center'>HOW IT WORKS</Header>
							<Step.Group fluid>
								<Step>
									<Icon name='edit outline' />
									<Step.Content>
										<Step.Title>Create Campaign</Step.Title>
										<Step.Description>Customise a campaign</Step.Description>
									</Step.Content>
								</Step>

								<Step>
									<Icon name='dollar sign' />
									<Step.Content>
										<Step.Title>Request Funds</Step.Title>
										<Step.Description>Receive donations</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon name='thumbs up outline' />
									<Step.Content>
										<Step.Title>Approval</Step.Title>
										<Step.Description>Get approval from donors</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon name='money bill alternate outline' />
									<Step.Content>
										<Step.Title>Withdraw Funds</Step.Title>
									</Step.Content>
								</Step>
							</Step.Group>
						</Segment>	
					</div>
					
					<Segment style={{marginTop:40}}>
					<Header as='h2' icon textAlign='center'>
								<Header.Content>Open Campaigns</Header.Content>
							</Header>
					
					<Grid divided='vertically'>
						<Grid.Row columns={3}>
							<Grid.Column width={11} stretched>
							{ this.renderCampaigns() }
							</Grid.Column>

							<Grid.Column width={5}>
							<div >
							<Link route="/campaigns/new">
									<a>
										<Button animated='fade' fluid basic color='teal'>
											<Button.Content visible><p style={{color:'teal'}}>Create Campaigns</p></Button.Content>
												<Button.Content hidden>
												<Icon name='add circle' color='teal' />
												</Button.Content>
										</Button>
									</a>
								</Link>
								<img src='../static/img3.png' style={{width:320, height:240, marginTop:40}}/>
							</div>
								
							</Grid.Column>

						</Grid.Row>
					</Grid>
					</Segment>
			</div>
		</Layout>
		);
	}
}

export default CampaignIndex;