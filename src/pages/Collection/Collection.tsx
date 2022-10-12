import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./Collection.module.scss";
import { Grid, Box, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import NFTCard from "../../components/NFTCard";

import Modal from '@mui/material/Modal';

import {Sidebar} from "../../components/Sidebar";
import {HeaderAsset} from "../../components/HeaderAsset";

export interface NFTProp {
  wax: any,
  Assets: any,
  Account: any,
}
export const Collection = ({ wax, Assets, Account }: NFTProp) => {
  const [showNFTs, setShowNFTs] = useState(Assets);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const prefix_uri = "https://ipfs.infura.io/ipfs/";

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

  return (
    <div className = "main">
    <Sidebar Account = {Account}/>
    <div style = {{overflow: "auto", width: "100%"}}>
    <HeaderAsset Consumables = {0} Thorium = {0} Oxygen = {0}/>

    <main className={styles.contents} >
      <h1 className="align-center">Collection (if the player has our NFTs)</h1>
      <div className={styles.page_contents}>
        <Box>
          <Grid container spacing={0} >
            {showNFTs.map((NFT: any) => (
              <>
                  {/* <NFTCard key={NFT.data.img} uri={prefix_uri+NFT.data.img} name={NFT.name} account={Account} assetID={NFT.asset_id} /> */}
              </>
            ))}
            
          </Grid>
        </Box>
      </div>
    </main>
    </div>
    </div>
  );
};
