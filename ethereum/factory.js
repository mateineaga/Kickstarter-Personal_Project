import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x4efbEBD714AB33f1A21eE3BcA4619Da8c89eC60F"
);

export default instance;
