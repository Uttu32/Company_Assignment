import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InsertLinkSharpIcon from "@mui/icons-material/InsertLinkSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Styles from "./Section2.module.css";

export default function Section2() {
  return (
    <div className={Styles.Parent}>
      <div className={Styles.Text}> 
        <h1>
          Prodient anim <strong>nor nulla iste</strong>
        </h1>
      </div>

      <div className={Styles.Main}>
        <div className={Styles.part1}>
          <p>Minim modi yet omnis nor quia so minima.</p>
        </div>
    
        <div className={Styles.part2}>
          <div>
            <EmailOutlinedIcon />
            lpsum Lorem
          </div>
          <div>
            <InsertLinkSharpIcon />
            lpsum Lorem
          </div>

          <div>
            <LocationOnOutlinedIcon />
            lpsum Lorem
          </div>
        </div>
      </div>
    </div>
  );
}
