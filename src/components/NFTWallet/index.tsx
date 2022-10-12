import React from "react";
import { useEffect, useState } from "react";

import "./card.css";
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';

import { Title1 } from '../../Icons'
import { Title2 } from '../../Icons'



export interface URIProp {
  uri: any,
  name: string,
  account: string,
  assetID: string,
  share : any,
  setOpen1:any,
  event :any,
}

const NFTWallet = ({ uri, name, account, assetID, share,setOpen1, event }: URIProp) => {

  const [hide, setHide] = useState(false);
  const box_style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "auto",
    // height: "100%",
    maxWidth: "234px",
    // width: "70%",
    // p: 2,
    // padding: "10px 5px 10px 5px",
    // bgcolor: '#1a1f3c',
    // borderRadius: 4,
    // border: "2px solid",
    // backgroundImage: "radial-gradient(circle, #5c0067 0%, #06313a 100%)",
  }

  const display_none = {
    display: "none",
  }


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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //------------ for model end------------

 

  return (
    <Grid xl={2.4} md={4} sm={6} xs={12} style={{ marginBottom: "50px" }} sx={[hide ? display_none : {}]}>
      <Box sx={box_style}>

        <Box style={{ width: "100%", margin: "auto" }}>
         
            <Title1></Title1>
          <div style={{ width: "100%", textAlign: "center", margin: "auto", marginTop: "5px" }}>
            <img style={{ width: "234px" }} src={uri} alt="card" />
          </div>
          <div style={{ border: "1px solid #D69D5D", width: "234px", height: "93px", margin: "auto", marginTop: "10px" }}>
            <div className="textContent">{name}</div>
            <div className="textContent_exit"> SHARES: {share}%</div>
            
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
            }} onClick={()=>setOpen1(event, true)}>{event}</button>
          </div>
          {event == "CLOSE" && <>
            <div style ={{display:"flex", justifyContent: "space-between", marginTop:"3px"}}>
              <div className="refund_button">REFUND</div>
              <div className="edit_button">EDIT</div>
            </div>
          
          <Title2 style={{marginTop:"6px"}}></Title2>
          </>}
          {event != "CLOSE" && <>

          <Title2 style={{marginTop:"10px"}}></Title2>
          </>}
        </Box>
      </Box>
    </Grid>
  );
};

export default NFTWallet;