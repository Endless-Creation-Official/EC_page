import React, { useRef, useState } from 'react';
import styles from './ApplicationResult.module.css';

// This component handles the display and checking of application results based on phone number
export default function ApplicationResult() {
    const phoneNumberRef = useRef();
    const [acceptance, setAcceptance] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = phoneNumberRef.current.value;
        showResult(phoneNumber)
            .then(data => {
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
                    {error ? (
                        <div className={styles.error}>{error}</div>
                    ) : acceptance === 'pass' ? (
                        <div className={styles.pass}>합격</div>
                    ) : acceptance === 'fail' ? (
                        <div className={styles.fail}>불합격</div>
                    ) : (
                        <div className={styles.unknown}>처리 중 오류가 발생했습니다.</div>
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
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => Promise.reject(data));
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Fetch Error:', error);
        return Promise.reject(error);
    });
};