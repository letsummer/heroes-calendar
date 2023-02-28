import React from "react";
import styles from "./Header.module.css";

function Header(){
    return(
        <div className={styles.header}>
            <span>T O D A Y</span>
            <div id={styles.todayInfo}>
                <div id={styles.todayInfo__some}>
                    <p>something</p>
                </div>
                <div id={styles.todayInfo__play}>
                    <div id={styles.todayInfo__team}>
                        <span></span>
                        <span> vs </span>
                        <span></span>
                    </div>
                    <div>18:30</div>
                </div>
                <div id={styles.todayInfo__stadium}>
                    <p>구장</p>
                    <p>날씨</p>
                </div>
            </div>
        </div>
    );
}

export default Header;