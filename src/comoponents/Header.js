import React from "react";
import styles from "./Header.module.css";

function Header(){
    return(
        <div className={styles.header}>
            <span>T O D A Y</span>
            <div>
                <span>홈 vs 원정</span>
                <span>장소</span>
                <span>날씨</span>
            </div>
        </div>
    );
}

export default Header;