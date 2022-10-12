import React from "react";
import { useEffect, useState } from "react";

import "./card.css";
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';

import { Title3 } from '../../Icons'
export interface URIProp {
  title: any,
  share: any,
  price: any,
  setOpen1:any,

}

const ChainInfo = ({ title, share, price,setOpen1 }: URIProp) => {


  //------------ for model start------------

  const modal_style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#1a203c',
    color: 'white',
    border: '4px solid #000',
    boxShadow: 24,
    borderColor: '#ea923e',
    textAlign: "center",
    borderRadius: "16px",
    p: 4,
  };
  const [open, setOpen] = useState(false);

  //------------ for model end------------



  return (
    <Box >

      <Box style={{ width: "100%", margin: "auto", marginTop: "40px", marginLeft: "42px" }} >
        <div style={{ width: "300px", height: "175px", backgroundImage: "url( './icon/title3.svg' )", backgroundSize: "cover", padding: "30px" }}>
          <div className="chaininformation">{title}</div>
          <div className="share">{share} OF SHARE</div>
          <div className="price">{price} SOL</div>
          <a className="more_details" href="*"> more details</a>
        </div>
        <button style={{
          marginTop:"6px",
          border: "0px solid",
          width: "302px",
          height: "32px",
          left: "222px",
          top: "1420px",
          fontFamily: 'Futura',
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "15px",
          lineHeight: "20px",
          textAlign: "center",
          textTransform: "uppercase",

          color: "#FFFFFF",
          background: "linear-gradient(217.67deg, #D69D5D 21.78%, #F9E29D 88%)"
        }} onClick={()=>setOpen1("BUY SHARES", true)}>BUY</button>

        {/* <Title3></Title3> */}

        {/* <div style={{ width: "100%", textAlign: "center", margin: "auto", marginTop: "5px" }}>
            <img style={{ width: "234px" }} src={uri} alt="card" />
          </div>
          <div style={{ border: "1px solid #D69D5D", width: "234px", height: "190px", margin: "auto", marginTop: "10px" }}>
            <div className="textContent">galactic gekos</div>
            <div className="textContent_exit"> EXITS</div>
            <div style={{ display: "flex", marginTop: "10px", justifyContent: "center" }}>
              <div className="nftInfo">50 SOL</div>
              <div className="nftInfo1" style={{ border: "none!important" }}> 25 SOL</div>
            </div>
            <div className="nftInfo2">Floor Price: 29 sol</div>
            <div className="nftInfo3" style={{ margin: "auto", marginTop: "13px" }}>
              <div className="contentCSS">2406.005 sol</div>
              <div className="contentCSS">invested to date</div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button style={{
              width: "234px", height: "40px", background: "linear-gradient(217.67deg, #D69D5D 21.78%, #F9E29D 88%)", margin: "auto", fontFamily: 'Futura',
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "20px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#FFFFFF",
              border:"0 solid",
            }}>INVEST</button>
          </div>
          <Title2 style={{marginTop:"10px"}}></Title2> */}

      </Box>
    </Box>
  );
};

export default ChainInfo;