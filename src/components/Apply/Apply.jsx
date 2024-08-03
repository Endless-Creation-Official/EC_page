import React, { useRef, useState, useEffect } from 'react';
import styles from './Apply.module.css';
import { submitApplication } from '../../api/apiClient';

function Main() {
  document.addEventListener(
    'keydown',
    function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    },
    true
  );
  const Name0 = useRef('');
  const Major0 = useRef('');
  const Studentid0 = useRef('');
  const Birth0 = useRef('');
  const Phonenumber0 = useRef('');
  const Email0 = useRef('');
  const Q10 = useRef('');
  const Q20 = useRef('');
  const Q30 = useRef('');

  const [isCheck, setIsCheck] = useState(false);
  const [buttonText, setButtonText] = useState('체크박스에 체크');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const formValue = {
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

  useEffect(() => {
    const allFieldsFilled = Object.values(formValue).every(
      (value) => typeof value === 'string' && value.trim() !== ''
    );
    const noErrors = Object.values(errors).every((error) => !error);
    /*console.log(allFieldsFilled);
    console.log(noErrors);
    console.log(formValue);*/
    setIsFormValid(allFieldsFilled && noErrors && isCheck);
  }, [formValue, errors, isCheck]);

  const toggleIsCheck = (e) => {
    setIsCheck(e.target.checked);
    if (e.target.checked) {
      setButtonText('제출하기');
    } else {
      setButtonText('체크박스에 체크');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'email' && !validateEmail(value)) {
      error = '올바른 이메일 주소를 입력하세요.';
    } else if (name === 'phonenumber' && !validatePhoneNumber(value)) {
      error = '올바른 전화번호를 입력하세요. 예: 010-1234-5678';
    } else if (name === 'studentid' && value.length !== 8) {
      error = '올바른 학번을 입력하세요. 학번은 8자리여야 합니다.';
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const validationErrors = Object.keys(formData).reduce((acc, key) => {
      if (key === 'email' || key === 'phonenumber' || key === 'studentid') {
        validateField(key, formData[key]);
      }
      return {
        ...acc,
        [key]: errors[key],
      };
    }, {});

    if (Object.values(validationErrors).some((error) => error)) {
      return;
    }

    setErrors({});

    submitApplication(formData)
      .then(() => {
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
        console.error('제출 중 오류가 발생했습니다.', error);
      });

    alert(`제출 완료되었습니다. \n${Name0.current.value}님, 행운을 빌어요!`);
  };

  return (
    <form onSubmit={handleSubmit} method='post'>
      <div className={styles.main}>
        <div className={styles.title}>EC 34기 지원서 </div>
        <h2>개인 정보</h2>
        이름
        <div className={styles.inputWrapper}>
          <input
            className={styles.privacy}
            name='name'
            type='text'
            placeholder='이름을 입력해주세요'
            ref={Name0}
            onBlur={handleBlur}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        소속학과
        <div className={styles.inputWrapper}>
          <input
            className={styles.privacy}
            name='major'
            type='text'
            placeholder='소속학과를 입력해주세요'
            ref={Major0}
            onBlur={handleBlur}
          />
          {errors.major && <span className={styles.error}>{errors.major}</span>}
        </div>
        학번
        <div className={styles.inputWrapper}>
          <input
            className={styles.privacy}
            name='studentid'
            type='text'
            placeholder='학번을 입력해주세요'
            ref={Studentid0}
            onBlur={handleBlur}
          />
          {errors.studentid && (
            <span className={styles.error}>{errors.studentid}</span>
          )}
        </div>
        생년월일
        <div className={styles.inputWrapper}>
          <input
            className={styles.privacy}
            name='birth'
            type='text'
            placeholder='생년월일을 입력해주세요 ex) 20010111'
            ref={Birth0}
            onBlur={handleBlur}
          />
          {errors.birth && <span className={styles.error}>{errors.birth}</span>}
        </div>
        전화번호
        <div className={styles.inputWrapper}>
          <input
            className={styles.privacy}
            name='phonenumber'
            type='text'
            placeholder='전화번호를 입력해주세요 ex) 010-1234-5678'
            ref={Phonenumber0}
            onBlur={handleBlur}
          />
          {errors.phonenumber && (
            <span className={styles.error}>{errors.phonenumber}</span>
          )}
        </div>
        Email
        <div className={styles.inputWrapper}>
          <input
            className={styles.privacy}
            name='email'
            type='text'
            placeholder='이메일을 입력해주세요'
            ref={Email0}
            onBlur={handleBlur}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <h2>질문 목록</h2>
        <div className={styles.question}>
          <p>
            1. 간단한 자기소개와 지원동기를 작성해주세요! (공백 포함 200자 이내)
          </p>
        </div>
        <div>
          <textarea
            type='text'
            name='q1'
            className={styles.textbox}
            placeholder='내용을 입력해주세요'
            maxLength={200}
            ref={Q10}
          />
        </div>
        <div className={styles.question}>
          <p>
            2. 살면서 어떠한 문제를 해결한 경험이 있나요? 그 문제를 어떻게
            해결했는지, 이를 통해 무엇을 배웠고 느꼈는지 구체적으로
            설명해주세요! 사소한 경험이라도 괜찮습니다. (공백 포함 200자 이내)
          </p>
        </div>
        <div>
          <textarea
            type='text'
            name='q2'
            className={styles.textbox}
            placeholder='내용을 입력해주세요'
            maxLength={200}
            ref={Q20}
          />
        </div>
        <div className={styles.question}>
          <p>
            3. 만들고 싶거나 관심있는 웹서비스, 혹은 하고싶은 스터디를
            작성해주세요! (공백 포함 200자 이내)
          </p>
        </div>
        <div>
          <textarea
            type='text'
            name='q3'
            className={styles.textbox}
            placeholder='내용을 입력해주세요'
            maxLength={200}
            ref={Q30}
          />
        </div>
        <div className={styles.beforeSubmit}>
          <div>
            <input type='checkbox' onChange={toggleIsCheck} />
            <label htmlFor='confirm'>모든 내용을 확인 후 제출하기</label>
          </div>
          <button
            type='submit'
            className={styles.admitButton}
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Main;
