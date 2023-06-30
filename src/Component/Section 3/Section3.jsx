import React from "react";
import InsertLinkSharpIcon from "@mui/icons-material/InsertLinkSharp";
import Styles from './Section3.module.css';

export default function Section3() {
  return (
    <div className={Styles.parent}>
        {/* 1st Part */}
      <div className={Styles.part1}>
        <img
          src="https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image"
        />

        <div>
          <div>
            <InsertLinkSharpIcon /> lpsum Lorem
          </div>
          <div>
            <InsertLinkSharpIcon /> lpsum Lorem
          </div>
          <div>
            <InsertLinkSharpIcon /> lpsum Lorem
          </div>
        </div>
      </div>

      {/* 2nd Part */}
      <div className={Styles.part2}>
        <div className={Styles.Titles}>
            <p>Numquam.Esse aliquib do,magni</p>
            <p>Minima ad for vitae sit</p>
            <a href="">lpsum Lorem</a>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            <div className={Styles.innner}>
                <button><InsertLinkSharpIcon /> lpsum Lorem</button>
                <p>Adipisicing unde vel so dolore, consequatur</p>
                <a href="">lpsum Lorem</a>
            </div>
        </div>
      </div>
    </div>
  );
}
