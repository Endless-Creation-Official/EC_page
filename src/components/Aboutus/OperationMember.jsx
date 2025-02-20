import styles from '../Aboutus/Aboutus.module.css';

function Operator({ members }) {
  // props로 members를 받음
  return (
    <div className={styles.operatorContainer}>
      <div className={styles.operator}>
        <h2>EC 35th</h2>
        <h1>운영진</h1>
      </div>
      <section className={styles.operators}>
        {members.map(
          (
            member,
            index // members 배열을 맵핑하여 각 멤버의 정보로 카드 생성
          ) => (
            <div key={index} className={styles.operatorcard}>
              <img
                src={member.photo}
                className={styles.profilePhoto}
                alt={member.alt}
              ></img>
              <div className={styles.content}>
                <div className={styles.name}>
                  <b>{member.name}</b> / {member.position}
                </div>
                <div className={styles.introduction}>
                  <p>{member.introduction}</p>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
}

const memberData = [
  {
    photo: 'members_photo/김경태1.jpg',
    alt: 'KT',
    name: '김경태',
    position: '회장',
    introduction: '함께 성장해요! 질문은 언제나 환영입니다',
  },
  {
    photo: 'members_photo/최강.jpg',
    alt: 'G',
    name: '최강',
    position: '부회장',
    introduction: '다들 파이팅!',
  },
    {
    photo: 'members_photo/곽용진.jpg',
    alt: 'YJ',
    name: '곽용진',
    position: '학술부장',
    introduction: '같이 잘해봅시다!',
  },
  {
    photo: 'members_photo/박진홍.jpeg',
    alt: 'YH',
    name: '박진홍',
    position: '재무부장',
    introduction: 'EC의 자랑이 되어주세요!',
  },
  {
    photo: 'members_photo/김병호.jpg',
    alt: 'KT',
    name: '김병호',
    position: '홍보부장',
    introduction: '해치지 않아요~',
  },
];

function main() {
  return (
    <div>
      <Operator members={memberData} />
    </div>
  );
}

export default main;
