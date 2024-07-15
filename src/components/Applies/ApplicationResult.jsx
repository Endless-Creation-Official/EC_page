import { useRef, useState } from 'react';
import axios from 'axios';

export default function ApplicationResult() {
  return (
    <div>
      <h1>지원 결과 확인</h1>
      <CheckAcceptance />
    </div>
  );
}

function CheckAcceptance() {
  const phoneNumberRef = useRef();
  const [acceptance, setAcceptance] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = phoneNumberRef.current.value;
    axios
      .post('api/showResult', { phoneNumber: phoneNumber })
      .then((response) => {
        setAcceptance(response.data.state);
        setIsSubmitted(true);
        setError('');
      })
      .catch(() => {
        setAcceptance(null);
        setIsSubmitted(true);
        setError('지원서 존재하지 않음');
      });
  };

  return (
    <div>
      <h1>결과 확인하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input type='text' placeholder='홍길동' />
          <label>전화번호</label>
          <input
            type='text'
            placeholder='ex) 010-2511-5633'
            ref={phoneNumberRef}
          />
        </div>
        <button type='submit'>조회</button>
      </form>
      {isSubmitted &&
        (acceptance !== null ? (
          <div>{acceptance === 'pass' ? 'pass' : 'fail'}</div>
        ) : (
          <div>{error}</div>
        ))}
    </div>
  );
}
