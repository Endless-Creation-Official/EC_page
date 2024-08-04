import React, { useRef, useState } from 'react';
import styles from './ApplicationResult.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

export default function ApplicationResult() {
  const phoneNumberRef = useRef();
  const resultRef = useRef();
  const [acceptance, setAcceptance] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = phoneNumberRef.current.value;
    showResult(phoneNumber)
      .then((data) => {
        if (data && data.state) {
          setAcceptance(data.state);
          setError('');
        } else {
          throw new Error('Invalid server response');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setAcceptance('');
        setError('지원서 존재하지 않음 또는 오류 발생');
      })
      .finally(() => {
        setIsSubmitted(true);
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      });
  };

  return (
    <div className={styles.container}>
      <h1>지원 결과 확인</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.search}>
          <div className={styles.formGroup}>
            <div className={styles.formInputGroup}>
              <div className={styles.formInput}>
                <label className={styles.formNameInput}>이름</label>
                <input type='text' placeholder='홍길동' />
              </div>
              <div className={styles.formInput}>
                <label>전화번호</label>
                <input
                  type='text'
                  placeholder='ex) 010-1234-5678'
                  ref={phoneNumberRef}
                />
              </div>
            </div>
            <button type='submit'>확인</button>
          </div>
        </div>
      </form>
      {isSubmitted && (
        <div ref={resultRef}>
          {acceptance === 'pass' ? (
            <Card style={{ margin: '5rem' }}>
              <Card.Body>
                <Card.Title>
                  <h2>합격을 축하합니다!</h2>
                </Card.Title>
                <Card.Text>추가 인터뷰를 안내하는 글</Card.Text>
              </Card.Body>
            </Card>
          ) : acceptance === 'fail' ? (
            <Card style={{ margin: '5rem' }}>
              <Card.Body>
                <Card.Title>
                  <h2>불합격입니다</h2>
                </Card.Title>
                <Card.Text>지원해주셔서 감사합니다.</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <Card style={{ margin: '3rem' }}>
              <FaExclamationTriangle size='3em' />
              <h5>{error}</h5>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

// Function to fetch the result from the server using the phone number
const showResult = (phoneNumber) => {
  const url = new URL('/api/showResult', window.location.origin);
  url.searchParams.append('phoneNumber', phoneNumber);

  return fetch(url, {
    method: 'POST',
    credentials: 'include', // Ensures cookies or authentication headers are sent with the request
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => Promise.reject(data));
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
      return Promise.reject(error);
    });
};
