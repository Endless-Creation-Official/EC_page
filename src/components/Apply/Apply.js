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

function Apply() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default Apply;
