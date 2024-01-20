//Apply.js
import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import styles from "./Apply.module.css";
import fs from "fs";


function FormBox(questionNumber) {

    const [questions, setQuestions] = useState([]);
    fs.promises.readFile('./Question.txt', "utf-8");
    
    


    return(
        <div className={styles.form}>
            <p className={styles.question}>{questionNumber}. </p>
            <p className={styles.question}>{questionText}</p>
            <input type="text" className={styles.textbox}></input>
        </div>
    )
}

function Main() {
    return (
    <div className={styles.main}>
        <h1 className={styles.title}>34기 지원서 </h1>
        <FormBox></FormBox>
        <FormBox></FormBox>
        <FormBox></FormBox>
        <FormBox></FormBox>
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