import { useRef, useState } from 'react';
import styles from './ApplicationResult.module.css';
import { showResult } from '../../api/apiClient';

export default function ApplicationResult() {
  return (
    <div className={styles.container}>
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
    showResult(phoneNumber)
      .then((response) => {
        setAcceptance(response.data.state);
        setIsSubmitted(true);
        setError('');
      })
      .catch(() => {
        setAcceptance(null);
        setError('지원서 존재하지 않음');
      });
  };

  return (
    <>
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
                  placeholder='ex) 010-2511-5633'
                  ref={phoneNumberRef}
                />
              </div>
            </div>
            <button type='submit'>조회</button>
          </div>
        </div>
      </form>
      {isSubmitted && (
        <div className={styles.result}>
          {acceptance === 'pass' ? (
            <div className={styles.pass}>합격</div>
          ) : acceptance === 'fail' ? (
            <div className={styles.fail}>불합격</div>
          ) : (
            <div className={styles.error}>{error}</div>
          )}
        </div>
      )}
    </>
  );
}
