// Apply.js
import React, { useState } from "react";
import styles from "./Apply.module.css";
import { questions } from "./Question" // Import the questions object

function FormBox({ questionNumber, questionText }) {
  return (
    <div className={styles.form}>
        <div className={styles.question}>
            <h1 className={styles.question}>{`질문 ${questionNumber}`}</h1>
            <p>{questionText}</p>
        </div>
      <textarea type="text"  className={styles.textbox}></textarea>
    </div>
  );
}

function Main() {
  // Map through the questions object and create FormBox for each question
  const formBoxes = Object.entries(questions).map(([key, value]) => (
    <FormBox key={key} questionNumber={key} questionText={value} />
  ));

  return (
    <form action={(formData)=>{
      // 데이터 가져와서
      // 비동기 처리
    }}>
      <div className={styles.main}>
        <h1 className={styles.title}>34기 지원서 </h1>
        {formBoxes}
      </div>
    </form>
  );
}

function Admit() {
    return(
      <div className={styles.ButtonContainer}>
        <div className={styles.admitButton}>
          제출하기
        </div>
      </div>
    )
}


export default { Main, Admit };