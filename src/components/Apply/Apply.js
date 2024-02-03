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
      <textarea type="text" name={questionNumber} className={styles.textbox}></textarea>
    </div>
  );
}

function Main() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formBoxes = Object.entries(questions).map(([key, value]) => (
    <FormBox key={key} questionNumber={key} questionText={value} />
  ));
  const handleSubmit= async (event) => {
    event.preventDefault();
    // let formData = new FormData(event.target);
    // for(let entry of formData.entries()){
    //   console.log(entry[0], entry[1]);
    // }
    alert("아직 지원 기간이 아닙니다. \n서류 지원 기간: 2월20일 ~ 3월 1일");
  }

  return (
    <form action="https://localhost:3000/create_process" method="post">
      <div className={styles.main}>
        <h1 className={styles.title}>34기 지원서 </h1>
        {formBoxes}
      </div>
      <div className={styles.ButtonContainer}>
        <button type="submit" className={styles.admitButton}>
          제출하기
        </button>
      </div>
    </form>
  );
}

export default Main;
