import React from "react";
import Styles from './Dropdown.module.css';

// Desktop displays: 1024×768 through 1920×1080
// Mobile displays: 360×640 through 414×896
// Tablet displays: 601×962 through 1280×800

export default function Dropdown(props) {

    let title = props.title;

  return (
    <div className={Styles.Main}>
      <div className={Styles.Part}>
        {/* 1st part */}
        <strong>{title}</strong>
        <a href="https://www.rapidd.net/">Link</a>        
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
      </div>
      <hr />
      <div className={Styles.Part}>

        {/* 2nd part */}
        <strong>{title}</strong>
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
        <a href="https://www.rapidd.net/">Link</a>
        </div>
    </div>
  );
}
