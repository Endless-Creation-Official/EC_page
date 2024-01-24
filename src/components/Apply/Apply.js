// Apply.js
import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Apply.module.css";
import { questions } from "./Question" // Import the questions object

function FormBox({ questionNumber, questionText }) {
  return (
    <div className={styles.form}>
        <div className={styles.question}>
            <h1 className={styles.question}>{`질문 ${questionNumber}`}</h1>
            <p>{questionText}</p>
        </div>
      <input type="text" className={styles.textbox}></input>
    </div>
  );
}

function Main() {
  // Map through the questions object and create FormBox for each question
  const formBoxes = Object.entries(questions).map(([key, value]) => (
    <FormBox key={key} questionNumber={key} questionText={value} />
  ));

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>34기 지원서 </h1>
      {formBoxes}
    </div>
  );
}

function Admit() {
    //useState와 Onclick evevt로 제출할 때 서버에 내용 전달하기: 나중에 추가예정
    //제출완료되었습니다. prompt 추가하기
    return(
      <div className={styles.ButtonContainer}>
        <div className={styles.admitButton}>
          제출하기
        </div>
      </div>
    )
}

function Apply() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Admit></Admit>
    </div>
  );
}

export default Apply;