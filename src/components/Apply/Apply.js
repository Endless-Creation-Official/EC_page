// Apply.js
import React, { useState, useRef } from "react";
import styles from "./Apply.module.css";
import axios from 'axios';

function Main() {
  // 작성하다가 enter키를 누르면 자동으로 제출되는 문제가 있어서 붙여넣은 코드
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    };
  }, true);

  //useRef 선언
  const Name0 = useRef();
  const Major0 = useRef();
  const Studentid0 = useRef();
  const Birth0 = useRef();
  const Phonenumber0 = useRef();
  const Email0 = useRef();
  const Q10 = useRef();
  const Q20 = useRef();
  const Q30 = useRef();

  // form state
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [studentid, setStudentid] = useState('');
  const [birth, setBirth] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  // 이벤트 핸들러 함수: 제출 버튼 onClick시 실행하는 콜백함수
  const handleSubmit = (e) => {
    e.preventDefault();




    // 바뀐 코드: formData객체를 이용함
    let formData =  new FormData();
    formData.append('Name', Name0.current.value);
    formData.append('Major', Major0.current.value);
    formData.append('Studentid', Studentid0.current.value);
    formData.append('Birth', Birth0.current.value);
    formData.append('Phonenumber', Phonenumber0.current.value);
    formData.append('Email', Email0.current.value);
    formData.append('Q1', Q10.current.value);
    formData.append('Q2', Q20.current.value);
    formData.append('Q3', Q30.current.value);
    

    //전의 코드: data
    // const data = {
    //   Name: name,
    //   Major: major,
    //   Studentid: studentid,
    //   Birth: birth,
    //   Phonenumber: phonenumber,
    //   Email: email,
    //   Q1: q1,
    //   Q2: q2,
    //   Q3: q3
    // }
    axios.post('https://sheet.best/api/sheets/512c44c2-ab42-4b00-ab88-e61913f83f5c', formData).then((response) => {
      console.log(response);
      // clearing form fields
      setName('');
      setMajor('');
      setStudentid('');
      setBirth('');
      setPhoneNumber('');
      setEmail('');
      setQ1('');
      setQ2('');
      setQ3('');
    })
    alert(`제출 완료되었습니다. \n${name}님, 행운을 빌어요!`);

    // '/'로 이동
    window.location.href = '/';
  }

  // 전화번호 입력시 '-' 자동 추가
  const handlePhoneNumberChange = (e) => {
    let inputPhoneNumber = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 남기기
  
    // 입력된 전화번호가 11자리 이상이면 초과 부분은 잘라냅니다.
    if (inputPhoneNumber.length > 11) {
      inputPhoneNumber = inputPhoneNumber.substr(0, 11);
    }
  
    let formattedPhoneNumber = '';
    if (inputPhoneNumber.length >= 4) {
      formattedPhoneNumber += inputPhoneNumber.substr(0, 3) + '-';
      if (inputPhoneNumber.length >= 7) {
        formattedPhoneNumber += inputPhoneNumber.substr(3, 4) + '-';
        formattedPhoneNumber += inputPhoneNumber.substr(7);
      } else {
        formattedPhoneNumber += inputPhoneNumber.substr(3);
      }
    } else {
      formattedPhoneNumber = inputPhoneNumber;
    }
  
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className={styles.main}>
        <h1 className={styles.title}>EC 34기 지원서 </h1>
        <h2>개인 정보</h2>
        이름
        <input className={styles.privacy} name="name" type="text" placeholder="이름을 입력해주세요"
          onChange={(e) => setName(e.target.value)} value={name}
          ref={Name0}></input>

        소속학과
        <input className={styles.privacy} name="major" type="text" placeholder="소속학과를 입력해주세요"
          onChange={(e) => setMajor(e.target.value)} value={major}
          ref={Major0}></input>

        학번
        <input className={styles.privacy} name="studentid" type="text" placeholder="학번을 입력해주세요"
          onChange={(e) => setStudentid(e.target.value)} value={studentid}
          ref={Studentid0}></input>

        생년월일
        <input className={styles.privacy} name="birth" type="text" placeholder="생년월일을 입력해주세요 ex) 2001-03-19"
          onChange={(e) => setBirth(e.target.value)} value={birth}
          ref={Birth0}></input>

        전화번호
        <input className={styles.privacy} name="phoneNumber" type="text" placeholder="전화번호를 입력해주세요( - 없이 입력)"
          onChange={handlePhoneNumberChange} value={phonenumber}
          ref={Phonenumber0}></input>

        Email
        <input className={styles.privacy} name="email" type="text" placeholder="이메일을 입력해주세요"
          onChange={(e) => setEmail(e.target.value)} value={email}
          ref={Email0}></input>

        <h2>질문 목록</h2>

        <div className={styles.question}>
          <p>1. 간단한 자기소개와 지원동기를 작성해주세요! (공백 포함 300자 이내)</p>
        </div>
        <textarea type="text"
          name="q1"
          className={styles.textbox}
          placeholder="내용을 입력해주세요"
          maxLength={300}
          onChange={(e) => setQ1(e.target.value)} value={q1}
          ref={Q10}>
        </textarea>

        <div className={styles.question}>
          <p>2. 살면서 어떠한 문제를 해결한 경험이 있나요? 그 문제를 어떻게 해결했는지, 이를 통해 무엇을 배웠고 느꼈는지 구체적으로 설명해주세요! 사소한 경험이라도 괜찮습니다. (공백 포함 300자 이내)</p>
        </div>
        <textarea type="text"
          name="q2"
          className={styles.textbox}
          placeholder="내용을 입력해주세요"
          maxLength={300}
          onChange={(e) => setQ2(e.target.value)} value={q2}
            ref={Q20}>
        </textarea>

        <div className={styles.question}>
          <p>3. 만들고 싶거나 관심있는 웹서비스, 혹은 하고싶은 스터디를 작성해주세요! (공백 포함 300자 이내)</p>
        </div>
        <textarea type="text"
          name="q3"
          className={styles.textbox}
          placeholder="내용을 입력해주세요"
          maxLength={300}
          onChange={(e) => setQ3(e.target.value)} value={q3}
            ref={Q30}>
        </textarea>

        <button type="submit" className={styles.admitButton}>
          제출하기
        </button>
      </div>
    </form>
  );
}

export default Main;
