import { useEffect, useState } from "react";
import styles from "./LoginPage.module.scss";
import { Grid, Box, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import * as waxjs from "@waxio/waxjs/dist";

import Modal from '@mui/material/Modal';
import { useNavigate, useLocation } from "react-router-dom";
export interface NFTProps {
  wax: any,
  setAccount: any,
  // balance: any,
  setAssets: any,
  // loginFlag: any,
}
export const LoginPage = ({ wax, setAccount, setAssets }: NFTProps) => {

  const [userBalance, setUserBalance] = useState("");
  const navigate = useNavigate();

  let loggedIn = false;
  let wallet1_userAccount: any;
  // [loggedIn, setLoginedIn] = useState(false);
  const [wallet_userAccount, setwallet_userAccount] = useState("");
  let display_nft = false;

  const collection = "mudplanetoff";
  let totalNFTs: any = [];

  const main = async () => {

    if (loggedIn) {
      let assets = await GetAssets();
      if (assets.length != 0) PopulateData(assets);
      navigate("/inventory");
    } else
      await autoLogin();
  }

  const autoLogin = async () => {
    let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
    if (isAutoLoginAvailable) {
      // wallet_userAccount = wax.userAccount;
      setwallet_userAccount(wax.userAccount);
      let pubKeys = wax.pubKeys;
      let str = 'Player: ' + wallet_userAccount
      loggedIn = true;
      await main();
    }
  }


  const login = async (type: any) => {
    if (type == 1) {
      try {
        if (!loggedIn) {
          console.log("str");

          wallet1_userAccount = await wax.login();
          console.log(wallet1_userAccount);
          setwallet_userAccount(wallet1_userAccount);
          let pubKeys = wax.pubKeys;
          let str = 'Player: ' + wallet1_userAccount
          console.log(str);
          // setAccount(wallet1_userAccount);
          loggedIn = true;
          setAccount(wallet1_userAccount);
          // setLogin(false);
          await main();
          let isWork = await wax.rpc
            .get_currency_balance("eosio.token", wallet1_userAccount, "wax")
            .then((res: any) => {
              console.log("geeg", res[0]);
              // setBalance(res[0]);
              return true;
            })
            .catch((err: any) => {
              console.log("err", err);
              return false;
            });

        }
      } catch (e) {
      }
    }
  }

  const GetAssets = async () => {
    let results = [];
    var path = "atomicassets/v1/assets?collection_name=" + collection + "&owner=" + wallet1_userAccount + "&page=1&limit=1000&order=desc&sort=asset_id";
    const response = await fetch("https://" + "wax.api.atomicassets.io/" + path, {
      headers: {
        "Content-Type": "text/plain"
      },
      method: "POST",
    });
    const body = await response.json();
    if (body.data.length != 0)
      results = body.data;
    return results;
  }

  const PopulateData = async (assets: any) => {
    console.log("assets", assets);
    if (!display_nft) {
      totalNFTs = [];
      var src = "https://ipfs.atomichub.io/ipfs/";
      for (const data of assets) {
        let img_src = src + data.data.img;
        totalNFTs.push(img_src);
      }
      // setNFT(totalNFTs);
      setAssets(assets);
      display_nft = true;
    }

  }

  const logout = async () => {
    loggedIn = false;
    display_nft = false;
    setwallet_userAccount("");
  }
  const image_style = {
    width: "30px",
    marginRight: "12px",
  }

  return (
    <main className={styles.loginpanel}>
      {/* <img src = "/image/logo.PNG"/> */}
      <div className={styles.welcome1}>
        <div style={{ marginTop: "220px" }}>
          <div className={styles.welcome}>Welcome to Imaginary Apes</div>
          <div className={styles.endpoint}>

            <button  className={styles.phantomwalletconnect} style ={{backgroundColor:"none!important"}} onClick={(e) => login(2)}>
              <span className={styles.phantomwalletconnect1} >CONNECT YOUR WALLET</span>
            </button>
          </div>
        </div>
      </div>

    </main>
  );
};
