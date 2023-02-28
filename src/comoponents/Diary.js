import React from "react";
import diaryStyles from "./Diary.module.css";
// import "./Diary.module.css";

function Diary() {
    return(
        <div className={diaryStyles.box}>
            <div>
                <p>monday</p>
                <p>content</p>
            </div>
            <div>
                <p>tuesday</p>
                <p>content</p>
            </div>
            <div>
                <p>wednesday</p>
                <p>content</p>
            </div>
            <div>
                <p>thursday</p>
                <p>content</p>
            </div>
            <div>
                <p>friday</p>
                <p>content</p>
            </div>
            <div>
                <p>saturday</p>
                <p>content</p>
            </div>
            <div>
                <p>sunday</p>
                <p>content</p>
            </div>
        </div>
    );
}

export default Diary;