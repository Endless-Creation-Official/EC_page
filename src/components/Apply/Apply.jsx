import axios from 'axios';
import React, { useRef, useState } from 'react';
import styles from './Apply.module.css';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

function Main() {
  // 작성하다가 enter키를 누르면 자동으로 제출되는 문제가 있어서 붙여넣은 코드
  document.addEventListener(
    'keydown',
    function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    },
    true
  );

  const [isCheck, setIsCheck] = useState(false);
  const [buttonText, setButtonText] = useState('체크박스에 체크');

  const toggleIsCheck = (e) => {
    setIsCheck(e.target.checked);
    if (e.target.checked) {
      setButtonText('제출하기');
    } else {
      setButtonText('체크박스에 체크');
    }
  };

  // useRef 선언
  const Name0 = useRef();
  const Major0 = useRef();
  const Studentid0 = useRef();
  const Birth0 = useRef();
  const Phonenumber0 = useRef();
  const Email0 = useRef();
  const Q10 = useRef();
  const Q20 = useRef();
  const Q30 = useRef();

  // 이벤트 핸들러 함수: 제출 버튼 onClick시 실행하는 콜백함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    // JSON 객체 생성
    const formData = {
      name: Name0.current.value,
      major: Major0.current.value,
      studentId: Studentid0.current.value,
      birth: Birth0.current.value,
      phoneNumber: Phonenumber0.current.value,
      email: Email0.current.value,
      question1: Q10.current.value,
      question2: Q20.current.value,
      question3: Q30.current.value,
    };

    // JSON.stringify를 사용하여 formData를 JSON 문자열로 변환
    const jsonData = JSON.stringify(formData);

    axios
      .post('43.202.40.240:8080/api/applyForm', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        // clearing form fields
        Name0.current.value = '';
        Major0.current.value = '';
        Studentid0.current.value = '';
        Birth0.current.value = '';
        Phonenumber0.current.value = '';
        Email0.current.value = '';
        Q10.current.value = '';
        Q20.current.value = '';
        Q30.current.value = '';
      })
      .catch((error) => {
        console.error('Error during form submission', error);
      });

    alert(`제출 완료되었습니다. \n${Name0.current.value}님, 행운을 빌어요!`);

    // '/'로 이동
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} method='post'>
      <div className={styles.main}>
        <div className={styles.title}>EC 34기 지원서 </div>
        <h2>개인 정보</h2>
        이름
        <input
          className={styles.privacy}
          name='name'
          type='text'
          placeholder='이름을 입력해주세요'
          ref={Name0}
        />
        소속학과
        <input
          className={styles.privacy}
          name='major'
          type='text'
          placeholder='소속학과를 입력해주세요'
          ref={Major0}
        />
        학번
        <input
          className={styles.privacy}
          name='studentid'
          type='text'
          placeholder='학번을 입력해주세요'
          ref={Studentid0}
        />
        생년월일
        <input
          className={styles.privacy}
          name='birth'
          type='text'
          placeholder='생년월일을 입력해주세요 ex) 2001-03-19'
          ref={Birth0}
        />
        전화번호
        <input
          className={styles.privacy}
          name='phonenumber'
          type='text'
          placeholder='전화번호를 입력해주세요 ex) 010-2511-5633'
          ref={Phonenumber0}
        />
        Email
        <input
          className={styles.privacy}
          name='email'
          type='text'
          placeholder='이메일을 입력해주세요'
          ref={Email0}
        />
        <h2>질문 목록</h2>
        <div className={styles.question}>
          <p>
            1. 간단한 자기소개와 지원동기를 작성해주세요! (공백 포함 300자 이내)
          </p>
        </div>
        <div>
          <textarea
            type='text'
            name='q1'
            className={styles.textbox}
            placeholder='내용을 입력해주세요'
            maxLength={300}
            ref={Q10}
          />
        </div>
        <div className={styles.question}>
          <p>
            2. 살면서 어떠한 문제를 해결한 경험이 있나요? 그 문제를 어떻게
            해결했는지, 이를 통해 무엇을 배웠고 느꼈는지 구체적으로
            설명해주세요! 사소한 경험이라도 괜찮습니다. (공백 포함 300자 이내)
          </p>
        </div>
        <div>
          <textarea
            type='text'
            name='q2'
            className={styles.textbox}
            placeholder='내용을 입력해주세요'
            maxLength={300}
            ref={Q20}
          />
        </div>
        <div className={styles.question}>
          <p>
            3. 만들고 싶거나 관심있는 웹서비스, 혹은 하고싶은 스터디를
            작성해주세요! (공백 포함 300자 이내)
          </p>
        </div>
        <div>
          <textarea
            type='text'
            name='q3'
            className={styles.textbox}
            placeholder='내용을 입력해주세요'
            maxLength={300}
            ref={Q30}
          />
        </div>
        <div>
          <input type='checkbox' onChange={toggleIsCheck} />
          모든 내용을 확인 후 제출하기
        </div>
        <button
          type='submit'
          className={styles.admitButton}
          disabled={!isCheck}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Main;
