import { useEffect, useState } from "react";

import "./headerasset.css";

export interface AssetProp {
  Consumables: any,
  Thorium: any,
  Oxygen: any,
}

export const HeaderAsset = ({Consumables, Thorium, Oxygen}: AssetProp) => {

  return (
    <div className = "asset-header">
      <ul>
        <li>
          <div>
            Consumables logo
          </div>
          <div>
            {Consumables}
          </div>
        </li>
        <li>
          <div>
            Thorium logo
          </div>
          <div>
            {Thorium}
          </div>
        </li>
        <li>
          <div>
            Oxygen logo
          </div>
          <div>
            {Oxygen}
          </div>
        </li>
      </ul>
    </div>
  );
};
