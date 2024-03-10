import React, { useRef, useState } from "react";
import styles from "./Members.module.css";

function MemberCard({ name = "", term = "", skills = [], image = "", alt = "", description = "" }) {
    return (
        <div className={styles.membercard}>
            <div className={styles.headercontainer}>
                <img src={image} className={styles.profilephoto} alt={alt}></img>
                <div className={styles.headerName}>
                    <div className={styles.name}>
                        <b>{name}</b> / {term}
                    </div>
                    <div className={styles.skill}>
                        {skills.map((skill, index) => (
                            <div key={index} className={styles.skills}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
}


function GraduatesCard({ name = "", term = "", skills = [], mark = null, image = "", alt = "", description = "", careers = [] }) {
    const [showAllCareers, setShowAllCareers] = useState(false);

    const showHamburger = careers.length > 1;

    return (
        <div className={styles.graduatescard}>
            <div className={styles.graduatesheadercontainer}>
                <div className={styles.graduatesheaderName}>
                    <div className={styles.graduatesname}>
                        <b>{name}</b> / {term}
                    </div>
                </div>
                {mark && <img src={mark} className={styles.companyMark} alt="companyMark" />}
                {showHamburger && (
                    <div className={styles.hamburger} onClick={() => setShowAllCareers(!showAllCareers)}>
                        <div className={styles.one}></div>
                        <div className={styles.two}></div>
                        <div className={styles.three}></div>
                    </div>
                )}
            </div>
            <div className={styles.graduatesskill}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.graduatesskills}>
                        {skill}
                    </div>
                ))}
            </div>
            <div>
                {showAllCareers
                    ? careers.map((career, index) => (
                        <div key={index} className={styles.careers}>
                            {career}
                        </div>
                    ))
                    : (
                        <div className={styles.careers}>
                            {careers[careers.length - 1]}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

/* 나중에 데이터베이스 만들어서 저장 */

function Main() {
    const graduates = [
        {
            name: "오예진",
            term: "29기",
            skills: ["React"],
            careers: ["前 카카오엔터프라이즈 인턴", "前 네이버 클라우드 인턴", "現 AWS Cloud Club 1st Captain"]
        },
        {
            name: "황인서",
            term: "28기",
            skills: ["Front-end"],
            careers: ["前 SW마에스트로", "現 네이버"],
            mark: "companyMark/네이버.webp"
        },
        {
            name: "조재영",
            term: "28기",
            skills: ["Spring", "Java", "Back-end"],
            careers: ["現 카카오뱅크"],
            mark: "companyMark/kakaobank.webp"
        },
        {
            name: "오정진",
            term: "28기",
            skills: ["React", "Next.js"],
            careers: ["現 YAPP 임원진", "現 현대오토에버 인턴"],
            mark: "companyMark/현대오토에버.webp"
        },
        {
            name: "조인혁",
            term: "27기",
            skills: ["Spring", "Nodejs"],
            careers: [],
        },
        {
            name: "정초이",
            term: "27기",
            skills: ["IOS"],
            careers: [],
        },
        {
            name: "신성일",
            term: "27기",
            skills: ["React", "Next.js"],
            careers: ["現 네이버 NTS"],
            mark: "companyMark/nts.webp"
        },
        {
            name: "박지수",
            term: "27기",
            careers: ["現 번개장터"],
            mark: "companyMark/번개장터.webp"
        },
        {
            name: "김초희",
            term: "27기",
            skills: ["Android"],
            careers: ["現 네이버웹툰"],
            mark: "companyMark/webtoon.webp"
        },
        {
            name: "김예림",
            term: "27기",
            skills: ["Java", "Spring", "e-commerce"],
            careers: ["現 아이디어스"],
            mark: "companyMark/아이디어스.webp"
        },
        {
            name: "김성현",
            term: "27기",
            skills: ["FinTech", "Full-stack"],
            careers: ["現 나이스피앤아이"],
            mark: "companyMark/나이스피앤아이.webp"
        },
        {
            name: "김선휘",
            term: "27기",
            skills: ["Game", "Embedded"],
            careers: ["前 EA코리아", "前 SSAFY", "現 LG전자"],
            mark: "companyMark/lg전자.webp"
        },
        {
            name: "김미성",
            term: "27기",
            skills: ["ML", "AI", "Data"],
            careers: ["現 IBK 기업은행 데이터센터"],
            mark: "companyMark/ibk.webp"

        },
        {
            name: "김건훈",
            term: "27기",
            skills: ["System", "Back-end"],
            careers: ["前 당근 인턴", "前 SW마에스트로", "現 네이버웹툰"],
            mark: "companyMark/webtoon.webp"
        },
        {
            name: "현승훈",
            term: "26기",
            skills: ["Cloud"],
            careers: ["現 현대오토에버"],
            mark: "companyMark/현대오토에버.webp"
        },
        {
            name: "이혜연",
            term: "26기",
            skills: ["System"],
            careers: ["現 삼성생명 시스템 운영팀"],
            mark: "companyMark/삼성생명.webp"
        },
        {
            name: "표명일",
            term: "26기",
            skills: ["Data"],
            careers: []
        },
        {
            name: "조연희",
            term: "26기",
            skills: ["IOS"],
            careers: ["現 신한카드"],
            mark: "companyMark/신한카드.webp"
        },
        {
            name: "박주환",
            term: "26기",
            skills: ["FinTech"],
            careers: []
        },
        {
            name: "김성규",
            term: "26기",
            skills: ["Android"],
            careers: ["現 네이버웹툰"],
            mark: "companyMark/webtoon.webp"
        },
        {
            name: "조영진",
            term: "25기",
            skills: ["Spring", "HRIS"],
            careers: ["現 동원산업"],
            mark: "companyMark/동원산업.webp"
        },
        {
            name: "주민기",
            term: "25기",
            skills: ["FinTech"],
            careers: ["前 SSAFY", "現 교보생명 금융IT"],
            mark: "companyMark/교보생명.webp"
        },
        {
            name: "신준수",
            term: "25기",
            skills: ["App", "FinTech"],
            careers: ["現 KB국민은행"],
            mark: "companyMark/kb국민은행.webp"
        },
        {
            name: "설주환",
            term: "25기",
            skills: ["Game"],
            careers: ["現 스마일게이트"],
            mark: "companyMark/smilegate.webp"
        },
        {
            name: "김재완",
            term: "25기",
            skills: ["Design", "PM"],
            careers: ["現 카카오VX"],
            mark: "companyMark/kakaoVX.webp"
        },
        {
            name: "김지혜",
            term: "24기",
            skills: ["PM"],
            careers: ["現 컬리"],
            mark: "companyMark/kurly.webp"
        },
        {
            name: "진상우",
            term: "24기",
            skills: ["SM", "Java", "Web", "Backend"]
        },
        {
            name: "주현석",
            term: "24기",
            skills: ["Mobility", "Navigation"],
            careers: []
        },
        {
            name: "윤영주",
            term: "24기",
            skills: ["Secure"],
            careers: []
        },
        {
            name: "윤현진",
            term: "24기",
            skills: ["MES", "ERP", "Web"],
            careers: ["現 D&O"],
            mark: "companyMark/D&O.webp"
        },
        {
            name: "황성진",
            term: "23기",
            skills: ["Cloud", "Secure"]
        },
        {
            name: "양희찬",
            term: "23기",
            skills: ["System", "Back-end"],
            careers: ["前 삼성전자 인턴", "前 네이버", "現 쿠팡"],
            mark: "companyMark/coupang.webp"
        },
        {
            name: "송제민",
            term: "23기",
            skills: ["Android"],
            careers: ["前 카카오 인턴", "現 신한카드"],
            mark: "companyMark/신한카드.webp"
        },
        {
            name: "강주호",
            term: "23기",
            skills: ["Back-end"],
            careers: ["現 네이버웹툰"],
            mark: "companyMark/webtoon.webp"
        },
        {
            name: "남윤제",
            term: "22기",
            skills: ["React", "Front-end"]
        },
        {
            name: "최세종",
            term: "21기",
            skills: ["Cloud", "Infra"],
            careers: ["現 삼성전자"],
            mark: "companyMark/samsung.webp"
        },
        {
            name: "김태희",
            term: "21기",
            skills: ["Cloud", "Back-end"],
            careers: ["現 삼성전자"],
            mark: "companyMark/samsung.webp"
        },
        {
            name: "박성혁",
            term: "20기",
            skills: ["SW Performance", "Data"],
        },
        {
            name: "신지혜",
            term: "20기",
            skills: ["Web", "React"],
            careers: ["前 삼성 에스원", "現 카카오"],
            mark: "companyMark/kakao.webp"
        },
        {
            name: "조준확",
            term: "19기",
            skills: ["Game"],
            careers: ["前 NC소프트", "現 알트나인"],
            mark: "companyMark/알트나인.webp"
        },
        {
            name: "차상균",
            term: "15기",
            careers: ["前 데브구루"],
            mark: "companyMark/데브구루.webp"
        },
        {
            name: "권재영",
            term: "15기",
            skills: ["HIS"]
        },
        {
            name: "원평희",
            term: "14기",
            skills: ["Device Driver", "Secure"],
            careers: ["現 잉카인터넷"],
            mark: "companyMark/잉카인터넷.webp"

        },
        {
            name: "송재욱",
            term: "14기",
            skills: ["Server"],
            careers: ["前 카카오", "前 우아한형제들", "現 라인"],
            mark: "companyMark/line.webp"

        },
        {
            name: "김민철",
            term: "13기",
            skills: ["Web", "Qt"]
        },
        {
            name: "이진호",
            term: "11기",
            skills: ["Device Driver", "C++"],
            careers: ["現 데브구루"],
            mark: "companyMark/데브구루.webp"
        },
        {
            name: "안승례",
            term: "11기",
            skills: ["Mobile", "Web"],
            careers: ["現 데브구루"],
            mark: "companyMark/데브구루.webp"
        },
        {
            name: "최정현",
            term: "9기",
            skills: ["System", "Mobile", "Back-end"],
            careers: ["現 데브구루 연구소장"],
            mark: "companyMark/데브구루.webp"
        },
        {
            name: "이주용",
            term: "8기",
            careers: ["現 LG전자"],
            mark: "companyMark/lg전자.webp"
        },
        {
            name: "김종환",
            term: "7기",
            skills: ["Web", "Back-end", "API"],
            careers: ["現 에이치엠솔루션"],
            mark: "companyMark/에이치엠솔루션.webp"
        },
        {
            name: "남윤혁",
            term: "5기",
            skills: ["Java", "Spring", "Back-end"],
            careers: ["MIS 유지&보수"]
        },
        {
            name: "박동현",
            term: "4기",
            careers: ["現 한글과컴퓨터 수석연구원"],
            mark: "companyMark/hancom.webp"
        },
        {
            name: "곽중선",
            term: "2기",
            careers: ["現 한화시스템"],
            mark: "companyMark/hanwhasystem.webp"
        },
        {
            name: "김인우",
            term: "2기",
            careers: ["現 한국하니웰"],
            mark: "companyMark/하니웰.webp"
        },
        {
            name: "이봉석",
            term: "1기",
            careers: ["前 안철수연구소", "現 하제소프트 대표이사"],
            mark: "companyMark/hajesoft.webp"
        },
        {
            name: "박창진",
            term: "1기",
            careers: ["前 도화정보통신", "現 하제소프트 개발팀장"],
            mark: "companyMark/hajesoft.webp"
        },
        {
            name: "한형찬",
            term: "1기",
            careers: ["前 안철수연구소", "前 마이크로소프트", "前 하제소프트"],
            mark: "companyMark/hajesoft.webp"
        }
    ];

    const members = [
        {
            name: "문정호",
            term: "27기",
            skills: ["IOS", "Android"],
            image: "/profile.jpg",
            description: "같이 열심히 해요"
        },
        {
            name: "유환욱",
            term: "28기",
            skills: ["Front-end", "React"],
            image: "/profile.jpg",
            description: "매순간 최선을 다하는 사람이 되고 싶습니다!"
        },
        {
            name: "김현종",
            term: "29기",
            skills: ["Game"],
            image: "members_photo/김현종.jpg",
            description: "시도해 보고 싶은 것이 많습니다!"
        },
        {
            name: "오예진",
            term: "29기",
            skills: ["React"],
            image: "members_photo/오예진.jpg",
            description: ""
        },
        {
            name: "정태현",
            term: "29기",
            skills: ["AI"],
            image: "/profile.jpg",
            description: "모두들 파이팅! 감사합니다~"
        },
        {
            name: "홍윤기",
            term: "29기",
            skills: ["Java", "Back-end"],
            image: "members_photo/홍윤기.webp",
            description: "이제 시작하는 단계이지만, 잘 부탁드립니다!"
        },
        {
            name: "김상현",
            term: "30기",
            skills: ["IOS"],
            image: "members_photo/김상현.jpg",
            description: "ESTJ / 성격이 활발한 편입니다!"
        },
        {
            name: "손창준",
            term: "30기",
            skills: ["Spring"],
            image: "/profile.jpg",
            description: "손창준 / 20학번 00년생입니다!"
        },
        {
            name: "홍준희",
            term: "31기",
            skills: ["ML"],
            image: "/profile.jpg",
            description: "19학번이고 25살입니다"
        },
        {
            name: "김병호",
            term: "31기",
            skills: ["Secure", "Mobile"],
            image: "./members_photo/김병호.jpg",
            description: "해치지않아요~"
        },
        {
            name: "곽용진",
            term: "31기",
            skills: ["AI", "Game"],
            image: "/profile.jpg",
            description: ""
        },
        {
            name: "문효재",
            term: "31기",
            skills: ["Spring"],
            image: "/profile.jpg",
            description: "새로운 사람들과 친해지는 것을 좋아합니다!"
        },
        {
            name: "정다운",
            term: "31기",
            skills: ["ML", "Front-end", "Data"],
            image: "members_photo/정다운.jpg",
            description: "논리적이고 적게 일하고 많이 얻는게 좋아요..^^"
        },
        {
            name: "한가을",
            term: "31기",
            skills: ["Java", "Spring", "Back-end"],
            image: "members_photo/한가을.jpg",
            description: "조용하고 낯가림이 심해요. ㅇㅅㅇ,,,"
        },
        {
            name: "강영훈",
            term: "32기",
            skills: ["React", "Web", "ML"],
            image: "members_photo/강영훈.jpg",
            description: "열심히 하는 중"
        },
        {
            name: "김경태",
            term: "32기",
            skills: ["Web", "Back-end", "AI"],
            image: "members_photo/김경태1.jpg",
            description: "성장하는 즐거움!"
        },
        {
            name: "박진홍",
            term: "33기",
            skills: ["React"],
            image: "members_photo/박진홍.jpeg",
            description: "신뢰받는 개발자가 되고싶습니다!"
        },
        {
            name: "송진현",
            term: "33기",
            skills: ["Game", "Web", "Unity"],
            image: "members_photo/송진현.jpg",
            description: "23학번 송진현입니다!!"
        }
    ];

    const graduatesSectionRef = useRef(null);

    const handleClick = () => {
        // EC graduates 섹션의 top 위치를 계산
        const topOffset = graduatesSectionRef.current.offsetTop - 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);

        // 스크롤 이동 애니메이션
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth', // 부드러운 애니메이션 효과
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.membertitle}>
                <h1>EC members</h1>
            </div>
            <div className={styles.scrolldown} onClick={handleClick}>
                click me!
            </div>
            <section className={styles.membercontents}>
                {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </section>
            <div className={styles.membertitle}>
                <h1>EC graduates</h1>
            </div>
            <h2>※ 2024년 2월 기준</h2>
            <section ref={graduatesSectionRef} className={styles.graduatescontents}>
                {graduates.map((member, index) => (
                    <GraduatesCard key={index} {...member} />
                ))}
            </section>
        </div>
    );
}

export default Main;
