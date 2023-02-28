import React from "react";
import calStyles from "./Calender.module.css";

function Calender() {
    return (
        <div className={calStyles.bar}>
            <span>◀</span>
            <span>2022 02 27</span>
            <span>▶</span>
            <span>오늘</span>
        </div>
    );
}

export default Calender;