import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./Bank.module.scss";

import {Sidebar} from "../../components/Sidebar";
import {HeaderAsset} from "../../components/HeaderAsset";

export interface SidebarProps {
  Account: any,
}

export const Bank = ({Account}:SidebarProps) => {
  
  return (
  	<div className = "main">
    <Sidebar Account = {Account}/>
    <div style = {{overflow: "auto", width: "100%"}}>
    <HeaderAsset Consumables = {0} Thorium = {0} Oxygen = {0}/>
    <main className={styles.contents} >
      <h1 className="align-center">Bank Coming Soon</h1>
    </main>
    </div>
    </div>
  );
};
