import React from "react";
import calStyles from "./Calendar.module.css";

function Calendar() {
    return (
        <div className={calStyles.bar}>
            <span>◀</span>
            <span>2022 02 27</span>
            <span>▶</span>
            <span>오늘</span>
        </div>
    );
}

export default Calendar;