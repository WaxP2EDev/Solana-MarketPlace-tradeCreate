import { useEffect, useState, useRef, useLayoutEffect } from "react";
// import styles from "./Admin.scss";
import { Grid, Box, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Admin.css";
import { Title } from '../../Icons'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import search from '../../image/search.png';
// import required modules
import { Pagination, Navigation } from "swiper";

import NFTCard from "../../components/NFTCard";
import NFTWallet from "../../components/NFTWallet";
import ChainInfo from "../../components/ChainInfo";
import { SlideView } from "../../components/SlideView";
import { StakePanel } from "../../components/StakePanel";

import { Sidebar } from "../../components/Sidebar";
import { HeaderAsset } from "../../components/HeaderAsset";

import Modal from '@mui/material/Modal';

export interface NFTProp {
  wax: any,
  Assets: any,
  Account: any,
}
export const Admin = ({ wax, Assets, Account }: NFTProp) => {
  const [showNFTs, setShowNFTs] = useState(Assets);
  const [uri, setUri] = useState("../../image/gecko.png");
  const [name, setName] = useState("");
  const [share, setShare] = useState(10);
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [investPrice, setInvestPrice] = useState();
  const [assetID, setAssetID] = useState("");
  const [account, setAccount] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [event, setEvent] = useState("");
  const [title, setTitle] = useState("talyo robotics");
  const modal_style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "80vh",
    overflow: "auto",
    padding: "40px",
    bgcolor: '#1a203c',
    color: 'white',
    border: '4px solid #000',
    boxShadow: 24,
    borderColor: '#ea923e',
    textAlign: "center",
    borderRadius: "16px",
    p: 4,
  };
  const setOpen1 = (event: any, modalflag: any) => {
    setOpen(modalflag);
    setEvent(event);


  }
  console.log(showNFTs);
  let totalNFTs: any = [];
  let nfts: any = [{
    uri:
      "../../image/gecko.png", share: 25, name: "galactic gekos"
  },
  { uri: "../../image/Monkeying_Around.png", share: 15, name: "solana monkey business" },
  { uri: "../../image/magic.png", share: 8, name: "blocksmith labs" },
  { uri: "../../image/Degods.png", share: 30, name: "Degods" }];
  let tradeNFTs: any = [{
    uri: "../../image/gecko.png", share: 15, name: "galactic gekos"
  },
  { uri: "../../image/Monkeying_Around.png", share: 10, name: "solana monkey business" },
  { uri: "../../image/magic.png", share: 3, name: "blocksmith labs" },
  { uri: "../../image/Degods.png", share: 23, name: "Degods" }];

  let ids: any = [];

  let flag = 0;
  flag = 1;
  // useEffect(() => {
  var src = "https://ipfs.atomichub.io/ipfs/";
  console.log("gg", Assets);

  for (const data of Assets) {
    let img1: any = data.data.img;
    let img_src = (<img src={`https://ipfs.atomichub.io/ipfs/${img1}`} />);
    nfts.push(img_src);

    ids.push(data.asset_id);
  }
  console.log(nfts);
  // }, [flag]);



  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <div className="main" >
      <div className="overlayer"></div>
      {/* <Sidebar Account={Account} /> */}
      <div style={{ overflow: "auto", width: "100%" }}>
        {/* <HeaderAsset Consumables={0} Thorium={0} Oxygen={0} /> */}
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <div className="logo">IA PLATFORM</div>
          {/* <div style={{ marginRight: "97px" }}>
            <div className="logo" style={{ fontSize: "38px", width: "100%", justifyContent: "end", marginLeft: "0" }}>My Cool Wallet Name</div>
            <div className="balance">BALANCE: 10.009 SOL</div>
          </div> */}
        </div>
        <div>
          <div className="content_pools">POOL SETUP</div>
          <div style={{ textAlign: "center", marginTop: "12px" }}><Title></Title> </div>
        </div>
        <div className="welcome1">
        <div style={{ marginTop: "176px" }}>
          <div className="welcome">Fill in all the fields, when you’re done, click confirm.</div>
          <div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"39px"}}>
            <div className="option">Collection Link</div>
            <div className="option" style={{marginLeft:"26.66px"}}>exit floor price value</div>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"24px"}}>
            <div className="option">enter price per sjare</div>
            <div className="option" style={{marginLeft:"26.66px"}}>Take Profit value</div>
            </div>
          </div>
          <div style={{textAlign:"center", marginTop:"23px"}}>

            <button  className="phantomwalletconnect" style ={{backgroundColor:"none!important", border:"0 solid"}} >
              <span className="phantomwalletconnect1" >CONFIRM</span>
            </button>
          </div>
        </div>
      </div>
        <div style={{ marginTop: "75px" }}>
          <div className="content_pools" style={{ marginTop: "0px" }}>ACTIVE POOLS</div>
          <div style={{ textAlign: "center", marginTop: "12px" }}><Title></Title> </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', paddingRight: "200px", paddingLeft: "200px", marginTop: "40px", marginBottom: "150px" }}>
          {tradeNFTs.map((NFT: any) => (
            <>
              <NFTWallet uri={NFT.uri} name={NFT.name} account={account} assetID={assetID} share={NFT.share} setOpen1={setOpen1} event="CLOSE" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
