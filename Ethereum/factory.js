import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4cD81D5FC1027632EeAE1519e29e57775486bbD7'
);

export default instance;