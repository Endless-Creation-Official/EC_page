// Apply.js
import React, { useState, useEffect } from "react";
import styles from "./Apply.module.css";
import axios from 'axios';

function Main() {
  // form state
  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  // 이벤트 핸들러 함수: 제출 버튼 onClick시 실행하는 콜백함수
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, phonenumber, email);
    const data = {
      Name: name,
      Phonenumber: phonenumber,
      Email: email,
      Q1: q1,
      Q2: q2,
      Q3: q3
    }
    axios.post('https://sheet.best/api/sheets/512c44c2-ab42-4b00-ab88-e61913f83f5c', data).then((response) => {
      console.log(response);
      // clearing form fields
      setName('');
      setPhoneNumber('');
      setEmail('');
      setQ1('');
      setQ2('');
      setQ3('');
    })
    alert(`제출 완료되었습니다. \n${name}님, 행운을 빌어요!`);

    // '/'로 이동
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className={styles.main}>
        <h1 className={styles.title}>34기 지원서 </h1>
        <h2>개인 정보</h2>
          이름
          <input className={styles.privacy} name="name" type="text" placeholder="이름을 입력해주세요"
            onChange={(e) => setName(e.target.value)} value={name}></input>
          
          전화 번호
          <input className={styles.privacy} name="phoneNumber" type="text" placeholder="전화번호를 입력해주세요"
            onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber}></input>

          Email
          <input className={styles.privacy} name="email" type="text" placeholder="이메일을 입력해주세요"
            onChange={(e) => setEmail(e.target.value)} value={email}></input>

        <h2>질문 목록</h2>
        <div className={styles.form}>
          <div className={styles.question}>
            <h1 className={styles.question}>{`질문 1`}</h1>
            <p>간단한 자기소개와 지원동기를 작성해주세요!</p>
          </div>
          <textarea type="text"
            name="q1"
            className={styles.textbox}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setQ1(e.target.value)} value={q1}
            maxLength="300"
          >
          </textarea>
        </div>
        <div className={styles.form}>
          <div className={styles.question}>
            <h1 className={styles.question}>{`질문 2`}</h1>
            <p>살면서 어떠한 문제를 해결한 경험이 있나요? 그 문제를 어떻게 해결했는지, 이를 통해 무엇을 배웠고 느꼈는지 구체적으로 설명해주세요! 사소한 경험이라도 괜찮습니다.</p>
          </div>
          <textarea type="text"
            name="q2"
            className={styles.textbox}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setQ2(e.target.value)} value={q2}
            maxLength="300"
          >
          </textarea>
        </div>
        <div className={styles.form}>
          <div className={styles.question}>
            <h1 className={styles.question}>{`질문 3`}</h1>
            <p>만들고 싶거나 관심있는 웹서비스, 혹은 하고싶은 스터디를 작성해주세요!</p>
          </div>
          <textarea type="text"
            name="q3"
            className={styles.textbox}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setQ3(e.target.value)} value={q3}
            maxLength="300"
          >
          </textarea>
        </div>
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