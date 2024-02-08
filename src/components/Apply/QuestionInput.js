// QuestionInput.js
import React from "react";
import styles from "./Apply.module.css";

const QuestionInput = ({ question, value, setValue, maxLength }) => {
  const handleTextInput = (input) => {
    const processedInput = input.replace(/\s+/g, ' ');
    if (processedInput.length <= maxLength) {
      setValue(input);
    }
  };

  return (
    <div>
        <div className={styles.question}>
            <p>{question}</p>
        </div>
        <div>
            <textarea
                type="text"
                className={styles.textbox}
                placeholder="내용을 입력해주세요"
                onChange={(e) => handleTextInput(e.target.value)}
                value={value}
            />
        </div>
        <div className={styles.counter}>
            {value.replace(/\s+/g, ' ').length} / {maxLength}
        </div>
    </div>
  );
};

export default QuestionInput;
