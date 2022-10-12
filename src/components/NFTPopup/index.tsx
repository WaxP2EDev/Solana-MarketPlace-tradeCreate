import React from "react";
import { useEffect, useState } from "react";

import "./card.css";
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';

import { Title1 } from '../../Icons'
import { Title2 } from '../../Icons'



export interface URIProp {
  uri: any,
  setUri: any,
  name: string,
  investPrice: any,
  setInvestPrice: any,

  max: any,
  setMax: any,
  min: any,
  setMin: any,
  share: any,
  setShare: any,
  event: any,
}

const NFTPopup = ({ uri, setUri, name, investPrice, setInvestPrice, max, setMax, min, setMin, share, setShare, event }: URIProp) => {

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

  const getInputValue = (event: any) => {
    let _value = event.target.value;
    console.log("value = ", _value, Math.floor(_value));
  };

  const onSubmit = () => {

  }

  return (
    <Grid xl={2.4} md={4} sm={6} xs={12} style={{ marginBottom: "50px" }} sx={[hide ? display_none : {}]}>
      <Box sx={box_style}>
        <div style={{
          width: "642px",
          height: "430px",
          left: "0px",
          top: "0px",
          border: "8px solid #F9E4A0",

          // border-image-source: linear-gradient(180deg, #D49757 0%, #F9E4A0 100%);

          // borderImageSource: "linear-gradient(180deg, #D49757 0%, #F9E4A0 100%",
          background: "#21181A"
        }}>
          <div style={{
            fontFamily: 'Futura',
            fontStyle: " normal",
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "29px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#F1D693",
            float: "right",
            width: "30px",
            height: "30px",
            left: "595px",
            top: "17px",

            border: "1px solid #FCEEAE"
          }}>x</div>
          <div>
            <div className="content_pools">{event}</div>
            <div style={{ textAlign: "center", marginTop: "12px" }}><Title1></Title1> </div>
          </div>
          <div style={{ display: 'flex', width: "100%", justifyContent: "center", margin: "auto", marginTop: "5px" }}>
            <img style={{ height: "234px", width: "50px" }} src="./icon/title4.svg " alt="card" />
            <img style={{ width: "234px", height: '234px' }} src={uri} alt="card" />
            <div>
              <div style={{ border: "1px solid #D69D5D", width: "234px", height: "187px", margin: "auto", marginTop: "0px" }}>
                {event == "INVEST" && <>
                  <div className="textContent_price">2406.005 sol</div>
                  <div className="textContent_price1"> invested to date {share}%</div>
                  <div className="textContent_price2">How much do you want to invest?</div>
                  <div className="textContent_price3">Exits</div>
                  <div style={{ display: "flex", marginTop: "10px", justifyContent: "center" }}>
                    <div className="nftInfo">50 SOL</div>
                    <div className="nftInfo1" style={{ border: "none!important" }}> 25 SOL</div>
                  </div>
                  <div className="textContent_price4">SHARE PRICE: 0.12 sol</div>
                </>}
                {event == "BUY SHARES" && <>
                  <div className="textContent_price">2406.005 sol</div>
                  <div className="textContent_price1"> Floor Price {share}%</div>

                  <div className="buy_textContent_price2">price to buy: 80 sol</div>
                  <div className="textContent_price3">Exits</div>
                  <div style={{ display: "flex", marginTop: "10px", justifyContent: "center" }}>
                    <div className="nftInfo">50 SOL</div>
                    <div className="nftInfo1" style={{ border: "none!important" }}> 25 SOL</div>
                  </div>
                  <div className="buy_textContent_price4">take profit: 20 sol</div>
                </>}
                {event == "SWAP SETUP" && <>
                  <div className="swap_name">{name}BLOCKSMITH LABS</div>
                  <div className="swap_sold"> Sold for: 98 sol {share}%</div>

                  <div className="swap_price">Fees: 0.298 sol</div>
                  <div style={{ display: "flex", marginTop: "30px", justifyContent: "center" }}>
                    <div className="nftInfo">50 SOL</div>
                    <div className="nftInfo1" style={{ border: "none!important" }}> 25 SOL</div>
                  </div>
                </>}
                {event == "LIST MY SHARES" && <>
                  <div className="swap_name">{name}galactic gekos</div>
                  <div className="list_sold"> Floor Price: 29 sol</div>
                  <div className="textContent_price3"style={{marginTop:"4px"}}>Exits</div>
                  <div style={{ display: "flex", marginTop: "3px", justifyContent: "center" }}>
                    <div className="nftInfo">50 SOL</div>
                    <div className="nftInfo1" style={{ border: "none!important" }}> 25 SOL</div>
                  </div>
                  <div className="buy_textContent_price4" style ={{marginTop:"1px"}}> take profit: 20 sol</div>

                  <img style={{ height: "15px", width: "98px", marginLeft:"66px" }} src="./icon/title6.svg " alt="card" />
                  <div className="list_share">15% shares</div>

                  <img style={{ height: "15px", width: "98px", marginLeft:"66px" }} src="./icon/title7.svg " alt="card" />

                  <div className="list_value">Value: 7.2 sol</div>

                </>}
              </div>

              <div style={{ textAlign: "center", marginTop: "7px" }}>
                <button style={{
                  width: "234px", height: "40px", background: "linear-gradient(217.67deg, #D69D5D 21.78%, #F9E29D 88%)", margin: "auto", fontFamily: 'Futura',
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: "20px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  border: "0 solid",
                }}>{event == "INVEST" && "CONFIRM"}
                {event == "BUY SHARES" && "BUY"}
                {event == "SWAP SETUP" && "SWAP"}

                {event == "LIST MY SHARES" && "LIST NOW"}

                </button>
              </div>
            </div>
            <img style={{ height: "234px", width: "50px" }} src="./icon/title5.svg " alt="card" />

          </div>


          {/* {event == "CLOSE" && <>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3px" }}>
              <div className="refund_button">REFUND</div>
              <div className="edit_button">EDIT</div>
            </div>

            <Title2 style={{ marginTop: "6px" }}></Title2>
          </>}
          {event != "CLOSE" && <>

            <Title2 style={{ marginTop: "10px" }}></Title2>
          </>} */}
        </div>
      </Box>
    </Grid >
  );
};

export default NFTPopup;