import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./Inventory.module.scss";
import { Grid, Box, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Inventory.module.css";
import { Title } from '../../Icons'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import search from '../../image/search.png';
// import required modules
import { Pagination, Navigation } from "swiper";

import NFTCard from "../../components/NFTCard";
import NFTPopup from "../../components/NFTPopup";
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
export const Inventory = ({ wax, Assets, Account }: NFTProp) => {
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
  let nfts: any = [
    "../../image/gecko.png",
    "../../image/Monkeying_Around.png",
    "../../image/magic.png",
    "../../image/Degods.png"];
  let price: any = [
    40,
    25,
    15,
    6.4,
    190,
    97.5,
    2.9,
    10];

  return (
    <div className="main" >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NFTPopup uri={uri} setUri={setUri} name={name} investPrice={investPrice} setInvestPrice={setInvestPrice} max={max} setMax={setMax} min={min} setMin={setMin} share = {share} setShare={setShare} event={event}/>
      </Modal>
      <div className="overlayer"></div>
      <div style={{ overflow: "auto", width: "100%" }}>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <div className="logo">IA PLATFORM</div>
          <div style={{ display: 'flex', marginRight: "97px" }}>
            <div className="logo" style={{ fontSize: "38px", width: "100%", justifyContent: "end", marginLeft: "0" }}>BALANCE: 10.009 SOL</div>
            <button className="view_button">VIEW WALLET</button>
          </div>
        </div>
        <div>
          <div className="content_pools">POOLS</div>
          <div style={{ textAlign: "center", marginTop: "12px" }}><Title></Title> </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', paddingRight: "200px", paddingLeft: "200px" }}>
          {nfts.map((NFT: any) => (
            <>
              <NFTCard uri={NFT} name={name} account={account} assetID={assetID} setOpen1={setOpen1} setEvent={setEvent}/>
            </>
          ))}
        </div>
        <div style={{ marginTop: "30px" }}>
          <div className="content_pools" style={{ marginTop: "0px" }}>Secondary share marketplace</div>
          <div style={{ textAlign: "center", marginTop: "12px" }}><Title></Title> </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <div className="filterUp1">
            <div className="filterUp2">
            </div>
          </div>
          <div className="dropdown" style={{ marginLeft: "8px" }}>
            <img src={search} alt="Logo" style={{
              width: "16px", marginTop: "8px",
              marginLeft: "6px"
            }} />
            <input className="inputsearch"
              type="text"
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', paddingRight: "100px", paddingLeft: "100px", marginTop: "40px", marginBottom: "150px" }}>
          {price.map((price: any) => (
            <>
              <ChainInfo title={title} share={share} price={price} setOpen1 = {setOpen1}/>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
