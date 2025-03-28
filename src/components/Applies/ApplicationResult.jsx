import React, { useRef, useState } from 'react';
import styles from './ApplicationResult.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Button, Card } from 'react-bootstrap';

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

  const onClick = () => {
    window.open(
      'https://docs.google.com/spreadsheets/d/1JIcqbp5T--5X9UzqMg46wVvVI9ClPqzHhzjVPQ4R-ro/edit?gid=0#gid=0'
    );
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#f3f3f3',
            marginBottom: '2rem',
            fontWeight: 'bold',
          }}
        >
          지원 결과 확인
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            marginBottom: '2rem',
            maxWidth: '400px', // 최대 너비 추가
            margin: '0 auto', // 중앙 정렬
          }}
        >
          <div style={{ marginBottom: '1.5rem', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center', // 중앙 정렬을 위해 추가
                width: '100%', // 전체 너비 사용
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%', // 전체 너비 사용
                }}
              >
                <label
                  style={{
                    fontSize: '1rem',
                    color: '#f4f4f4',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  이름
                </label>
                <input
                  type='text'
                  placeholder='   홍길동'
                  style={{
                    width: '100%', // 전체 너비 사용
                    padding: '0.8rem 0',
                    fontSize: '1rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    textAlign: 'center',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#84fab0')}
                  onBlur={(e) => (e.target.style.borderColor = '#e0e0e0')}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%', // 전체 너비 사용
                }}
              >
                <label
                  style={{
                    fontSize: '1rem',
                    color: '#f4f4f4',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                  }}
                >
                  전화번호
                </label>
                <input
                  type='text'
                  placeholder='  ex) 010-1234-5678'
                  ref={phoneNumberRef}
                  style={{
                    width: '100%', // 전체 너비 사용
                    padding: '0.8rem 0',
                    fontSize: '1rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    textAlign: 'center',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#84fab0')}
                  onBlur={(e) => (e.target.style.borderColor = '#e0e0e0')}
                />
              </div>
              <button
                type='submit'
                style={{
                  width: '100%', // 전체 너비 사용
                  padding: '0.8rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'white',
                  backgroundColor: '#2d3436',
                  border: '1px solid #f1f1f1',
                  borderRadius: '8px',
                  marginTop: '2rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#1e2527';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#2d3436';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                결과 확인하기
              </button>
            </div>
          </div>
        </form>
        {isSubmitted && (
          <div ref={resultRef} style={{ marginTop: '2rem' }}>
            {acceptance === 'pass' ? (
              <Card
                style={{
                  margin: '2rem auto',
                  maxWidth: '400px',
                  borderRadius: '15px',
                  border: 'none',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  background:
                    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <Card.Title>
                    <h2
                      style={{
                        color: '#2d3436',
                        fontSize: '2.5rem',
                        marginBottom: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      🎉 합격을<br></br> 축하합니다!
                    </h2>
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: '#2d3436',
                      fontSize: '1.2rem',
                      marginBottom: '2rem',
                    }}
                  >
                    지원해주셔서 감사합니다. <br></br>아래 버튼을 눌러 2차
                    인터뷰에 참석해주세요.
                  </Card.Text>
                  <Button
                    variant='dark'
                    onClick={onClick}
                    style={{
                      marginTop: '1rem',
                      borderRadius: '25px',
                      padding: '0.8rem 2rem',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      backgroundColor: '#f3f3f3',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    }}
                  >
                    면접 일정 확인하기
                  </Button>
                </Card.Body>
              </Card>
            ) : acceptance === 'fail' ? (
              <Card
                style={{
                  margin: '2rem auto',
                  maxWidth: '400px',
                  borderRadius: '15px',
                  border: 'none',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  background:
                    'linear-gradient(120deg, #ffd1d1 0%, #fff1f1 100%)',
                }}
              >
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <Card.Title>
                    <h2
                      style={{
                        color: '#5c2f2f',
                        fontSize: '2.5rem',
                        marginBottom: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      불합격입니다
                    </h2>
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: '#5c2f2f',
                      fontSize: '1.2rem',
                    }}
                  >
                    지원해주셔서 감사합니다.
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <Card
                style={{
                  margin: '2rem auto',
                  maxWidth: '400px',
                  borderRadius: '15px',
                  border: 'none',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  background:
                    'linear-gradient(120deg, #fff9c4 0%, #fff5e6 100%)',
                }}
              >
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <FaExclamationTriangle
                    size='3em'
                    style={{
                      color: '#856404',
                      marginBottom: '1rem',
                    }}
                  />
                  <h5
                    style={{
                      color: '#856404',
                      fontSize: '1.2rem',
                      fontWeight: '500',
                    }}
                  >
                    {error}
                  </h5>
                </Card.Body>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Function to fetch the result from the server using the phone number
const showResult = (phoneNumber) => {
  const url = new URL('/api/result', window.location.origin);
  url.searchParams.append('phoneNumber', phoneNumber);

  return fetch(url, {
    method: 'GET',
    credentials: 'include',
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => Promise.reject(data));
      }
      //console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
      return Promise.reject(error);
    });
};
