import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export interface NFTProp {
  wax: any,
  Assets: any,
  Account: any,
}

export interface SideProp{
  Account: any,
}

export const Sidebar = ({Account}:SideProp) => {

  return (
    <div className = "sidebar">
      <div className = "logo">
        <img src="/image/logo.PNG" />
        <h2>{Account}</h2>
        <h3><Link to={`/login`}>Logout</Link></h3>
      </div>

      <div className = "category">
        <ul>
          <li><Link to={`/inventory`}>Inventory</Link></li>
          <li><Link to={`/collection`}>Collection</Link></li>
          <li><Link to={`/territory`}>Territory</Link></li>
          <li><Link to={`/evolution`}>Evolution</Link></li>
          <li><Link to={`/breeding`}>Breeding</Link></li>
          <li><Link to={`/bank`}>Bank</Link></li>
        </ul>
      </div>
    </div>
  );
};
