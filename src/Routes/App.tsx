import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as waxjs from "@waxio/waxjs/dist";


import { LoginPage } from "../pages/LoginPage/LoginPage";
import { Main } from "../pages/Main";
import { Inventory } from "../pages/Inventory";
import { Mywallet } from "../pages/Mywallet";
import { Admin } from "../pages/Admin";
// import { Collection } from "../pages/Collection";
import { Territory } from "../pages/Territory";
import { Evolution } from "../pages/Evolution";
import { Breeding } from "../pages/Breeding";
import { Bank } from "../pages/Bank";

import {Sidebar} from "../components/Sidebar";
import {HeaderAsset} from "../components/HeaderAsset";


export const App = () => {
  const [NFTs, setNFT] = useState([]);
  const [Assets, setAssets] = useState([]);
  const [Account, setAccount] = useState("Wallet Address");

  const [loginFlag, setLogin] = useState(true);
  const [balance, setBalance] = useState("");
  const [nickname, setNickname] = useState("");

  const endpoint_uri = "https://wax.greymass.com";
  const wax = new waxjs.WaxJS({
    rpcEndpoint: endpoint_uri
  });

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage wax = {wax} setAssets = {setAssets} setAccount = {setAccount}/>} />\
            <Route path="/login" element={<LoginPage wax = {wax} setAssets = {setAssets} setAccount = {setAccount}/>} />
            <Route path="/inventory" element={<Inventory wax = {wax} Assets = {Assets} Account = {Account}/>} />
            <Route path="/mywallet" element={<Mywallet wax = {wax} Assets = {Assets} Account = {Account}/>} />
            <Route path="/admin" element={<Admin wax = {wax} Assets = {Assets} Account = {Account}/>} />
            <Route path="/evolution" element={<Evolution Account = {Account}/>} />
            <Route path="/breeding" element={<Breeding Account = {Account}/>} />
            <Route path="/bank" element={<Bank Account = {Account}/>} />
          </Routes>
      </BrowserRouter>
      {/*
      <div className = "main">
        <Sidebar Account = {Account}/>
        <div style = {{overflow: "auto", width: "100%"}}>
        <HeaderAsset Consumables = {0} Thorium = {0} Oxygen = {0}/>
        <BrowserRouter>
            <Routes>
              <Route path="/inventory" element={<Inventory wax = {wax} Assets = {Assets} Account = {Account}/>} />
              <Route path="/collection" element={<Collection wax = {wax} Assets = {Assets} Account = {Account}/>} />
              <Route path="/territory" element={<Territory/>} />
              <Route path="/evolution" element={<Evolution/>} />
              <Route path="/breeding" element={<Breeding/>} />
              <Route path="/bank" element={<Bank/>} />
            </Routes>
        </BrowserRouter>
        </div>
      </div>*/}
    </>
  );
};
