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
  setOpen1:any,
  setEvent:any,
}

const NFTCard = ({ uri, name, account, assetID, setOpen1, setEvent }: URIProp) => {

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
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  //------------ for model end------------

  const getInputValue = (event: any) => {
    let _value = event.target.value;
    console.log("value = ", _value, Math.floor(_value));
  };

  const onSubmit = () => {

  }

  return (
    <Grid xl={2.4} md={4} sm={6} xs={12} style={{ marginBottom: "50px" }} sx={[hide ? display_none : {}]}>
      <Box sx={box_style}>

        {/* <div className="logo"> */}
        
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modal_style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Type stake amounts
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Button variant="outlined" sx={{ mr: 2 }} onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={() => onSubmit()}>Confirm</Button>
              </Typography>
            </Box>
          </Modal> */}
        {/* </div> */}
          <div className="popup">x</div>
        <Box style={{ width: "100%", margin: "auto" }}>
         
            <Title1></Title1>
          <div style={{ width: "100%", textAlign: "center", margin: "auto", marginTop: "5px" }}>
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
            }} onClick={()=>setOpen1("INVEST", true)}>INVEST</button>
          </div>
          <Title2 style={{marginTop:"10px"}}></Title2>
         
        </Box>
      </Box>
    </Grid>
  );
};

export default NFTCard;