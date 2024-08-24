import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Recruit.module.css';

function Main() {
  const onClickOverTime = (e) => {
    e.preventDefault();
    alert('지원 기간이 아닙니다.');
  };
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h1>EC와 함께하고 싶다면?</h1>
        <Link to='/apply'>
          <button className={styles.button} onClick={onClickOverTime}>
            지원하러 가기
          </button>
        </Link>
        <Link to='/applies/result'>
          <button className={styles.buttonResult}>
            지원결과 확인하러 가기
          </button>
        </Link>
      </div>
      <FAQ />
    </div>
  );
}

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.containerfaq}>
      <h1>FAQ</h1>
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <div className={styles.accordionitem} key={index}>
            <button
              id={`accordion-button-${index + 1}`}
              aria-expanded={expandedIndex === index}
              onClick={() => toggleAccordion(index)}
            >
              <span className={styles.accordiontitle}>{item.question}</span>
              <span className={styles.icon} aria-hidden='true'></span>
            </button>
            <div className={styles.accordioncontent}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    question: '신입생만 지원 가능한가요?',
    answer: '아닙니다! 나이, 학년과 관계없이 모두 환영합니다!',
  },
  {
    question: '면접은 어떻게 진행되나요?',
    answer:
      '서류 심사를 통과한 경우, 개강 후에 면접을 진행할 예정입니다. 따뜻한 분위기에서 여러분을 맞이할 준비가 되어 있으니, 편안한 마음으로 찾아주시길 바랍니다.',
  },
  {
    question: '코딩을 한 번도 해본 적이 없는데, 활동할 수 있을까요?',
    answer:
      '가능합니다! EC를 거쳐간 선배들 모두 뜨거운 열정만으로 시작하여 현재에 이르렀습니다. EC에서는 정규 세미나와 스터디, 프로젝트 등 여러분의 성장을 북돋아줄 수 있는 활동이 준비되어 있습니다!',
  },
  {
    question: '학생회나 다른 연합동아리와 병행 가능한가요?',
    answer:
      '네! 동아리 활동을 하는데 있어 크게 지장이 가지 않다면 가능합니다. 동아리 부원으로서 필수적으로 해야하는 활동을 할 수 있다면 가능합니다.',
  },
  {
    question: '컴퓨터공학과 학생만 지원할 수 있나요?',
    answer:
      '이번 34기 모집에서는 컴퓨터공학과 복수전공, 부전공, 융합전공 학생까지만 지원을 받고 있습니다.',
  },
];

export default Main;
