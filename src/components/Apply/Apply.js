//Apply.js
import React from "react";
import Header from "../Header/Header";
import styles from "./Apply.module.css";

function FormBox() {
    return(
        <div className={styles.form}>
            <p className={styles.question}>질문 1</p>
            <input type="text" className={styles.textbox}></input>
        </div>
    )
}

function Main() {
    return (
    <div className={styles.main}>
        <h1 className={styles.title}>34기 지원서 </h1>
        <FormBox></FormBox>
    </div>
    )
}

function Apply() {

    return( 
    <div>
        <Header></Header>
        <Main></Main>
    </div>
    )
}

export default Apply; 