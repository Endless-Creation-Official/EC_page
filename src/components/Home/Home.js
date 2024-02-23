import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Recruit');
    }
    return (
        <div className={styles.container}>
            <div fetchpriority="high" className={styles.maintitle}>
                <div className={styles.title}>
                    {/* <h1>Endless Creation</h1>
                    <h2 className={styles.textbox}>
                        34기 모집 중!
                        <div className={styles.scrolldown1} onClick={handleClick}>
                            지원하기!
                        </div>
                    </h2>
                    <div className={styles.scrolldown2} onClick={handleClick}>
                        지원하기!
                    </div> */}
                    <div className={styles.eventBox}>
                        <h1>신입생 새터 이벤트!</h1>
                        <h3>EC의 핵심 가치 세가지는?</h3>
                        <p>홈페이지에서 EC의 핵심 가치 세 가지를 찾아서 아래의 번호로 문자를 보내주세요!(힌트: 홈페이지를 잘 탐색해 보세요)</p>
                        <p>정답 예시: 피자, 치킨, 햄버거</p>
                        <p>📞010 - 9540 - 6570 📞</p>
                        <p>🎁 상품 🎁</p>
                        <p>1등 ⌨️기계식 키보드</p>
                        <p>2등 🖱️게이밍 마우스</p>
                        <p>3등 💳올리브영 상품권</p>
                        <p>4, 5등 🔋보조 배터리</p>
                        <p>10등 ☕스타벅스 상품권</p>
                        <p>15등 🧋공차 상품권기계식 키보드</p>
                        <p>20등 ⌨️기계식 키보드</p>
                        
                    </div>
                </div>
            </div>
            <AboutEC></AboutEC>
            <Identity></Identity>
            <Project></Project>
            <Process></Process>
            <FAQ></FAQ>
        </div>
    );
}

function AboutEC(props) {
    const [memberCount, setMemberCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [establishmentYear, setEstablishmentYear] = useState(2024);
    const endingMemberCount = 32;
    const endingProjectCount = 84;
    const startingEstablishmentYear = 1991;

    const titleRef = useRef();

    useEffect(() => {
        let start;
        let animationStarted = false;

        const handleScroll = () => {
            const titleElement = titleRef.current;
            const titleRect = titleElement.getBoundingClientRect();

            // Check if the title is visible on the screen
            if (titleRect.top < window.innerHeight && titleRect.bottom >= 0 && !animationStarted) {
                animationStarted = true;

                const animate = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;

                    const animatedMemberCount = Math.min(Math.floor((progress / 4000) * endingMemberCount), endingMemberCount);
                    const animatedProjectCount = Math.min(Math.floor((progress / 4000) * endingProjectCount), endingProjectCount);

                    setMemberCount(animatedMemberCount);
                    setProjectCount(animatedProjectCount);

                    // Calculate establishment year progress to go from 2024 to 1991
                    const establishmentYearProgress = Math.min((progress / 4000), 1);
                    const animatedEstablishmentYear = 2024 - Math.floor(establishmentYearProgress * (2024 - startingEstablishmentYear));
                    setEstablishmentYear(animatedEstablishmentYear);

                    if (animatedMemberCount === endingMemberCount && animatedProjectCount === endingProjectCount && animatedEstablishmentYear === startingEstablishmentYear) {
                        return; // Stop the animation when all counts reach their respective endings
                    }

                    requestAnimationFrame(animate);
                };

                requestAnimationFrame(animate);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setMemberCount(0);
            setProjectCount(0);
            setEstablishmentYear(2024);
        }; // Reset the counts when the component unmounts
    }, []); // Empty dependency array, as we don't need any dependencies here

    return (
        <div className={styles.aboutec}>
            <h1 ref={titleRef}>지금까지 EC는?</h1>
            <div className={styles.aboutecContainer}>
                <div className={styles.box}>
                    <span>설립일</span>
                    Since {establishmentYear}
                </div>
                <div className={styles.box}>
                    <span>멤버</span>
                    <div>{memberCount} 명</div>
                </div>
                <div className={styles.box}>
                    <span>누적 프로젝트 수</span>
                    <div>
                        {projectCount} <b>+</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Identity() {
    return (
        <div className={styles.identity}>
            <h1>EC의 핵심 가치</h1>
            <div className={styles.identityContainer}>
                <div className={styles.boxidentity}>
                    <div className={styles.identityTitle}>
                        <img src="/Growth.png" className={styles.identityImage} alt="Growth"></img>
                    </div>
                    <div className={styles.identityTitle}>Growth</div>
                </div>
                <div className={styles.boxidentity}>
                    <div className={styles.identityTitle}>
                        <img src="/Sharing.png" className={styles.identityImage} alt="Sharing"></img>
                    </div>
                    <div className={styles.identityTitle}>Sharing</div>
                </div>
                <div className={styles.boxidentity}>
                    <div className={styles.identityTitle}>
                        <img src="/Cooperation.png" className={styles.identityImage} alt="Cooperation"></img>
                    </div>
                    <div className={styles.identityTitle}>Cooperation</div>
                </div>
            </div>
        </div>
    );
}

const projects = [
    { imageLink: "./projectimage/duting-app.webp", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/33178048/186322211-26ec4031-cf03-4e75-8fe9-d9c5c2674858.png", mainLink: "https://github.com/Endless-Creation-32nd/refill-front" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128898118-1ada994a-e8b0-480f-b93a-c682f2ae6baa.gif", mainLink: "https://github.com/woori-hippy/hippy_front" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128905429-1cdcc41c-e570-4819-a112-608936563d79.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "./projectimage/토이프로젝트.webp", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "./projectimage/알고리즘스터디.webp", mainLink: "알고리즘 스터디" },
    { imageLink: "./projectimage/React스터디.webp", mainLink: "리액트 스터디" },
    { imageLink: "./projectimage/머신러닝스터디.webp", mainLink: "머신러닝 스터디" },
    { imageLink: "./projectimage/게임스터디.webp", mainLink: "게임 스터디" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/152966700-aa767bc2-9e36-41c3-aa09-e5e3a87640e9.png", mainLink: "https://github.com/gom-3/dutying-web" }

];
function ProjectSlide() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true

    };

    const randerSlides = () => (
        projects.map(element => (
            <div className={styles.projectContainer}>
                <img src={element.imageLink} loading="lazy" className={styles.imagesize} alt={element.mainLink}></img>
            </div>
        ))
    );

    return (
        <div className={styles.slideContainer}>
            <Slider {...settings}> {randerSlides()}</Slider>
        </div>
    )
}

function Project() {
    return (
        <div className={styles.project}>
            <h1>Project & Study</h1>
            <div className={styles.slidebox}>
                <ProjectSlide></ProjectSlide>
            </div>
            <label className={styles.dropdown}>
                <div className={styles.ddbutton}>
                    프로젝트 & 스터디 더보기
                </div>

                <input type="checkbox" className={styles.ddinput} />

                <ul className={styles.ddmenu}>
                    <li><a href="https://www.notion.so/fc2751a8f4d042dfbf02eede5c7ab6df" target="_blank" rel="noopener noreferrer">33기</a></li>
                    <li><a href="https://lnseo.notion.site/c83527196fc74296b4e9603cd4f6fefd" target="_blank" rel="noopener noreferrer">32기(학술부)</a></li>
                    <li><a href="https://lnseo.notion.site/92ecbae96b2d41c886df4d30f3ef4516" target="_blank" rel="noopener noreferrer">32기(개발부)</a></li>
                </ul>

            </label>
        </div>
    );
}

function Process() {
    return (
        <div className={styles.process}>
            <h1>34th process</h1>
            <table className={styles.processtable}>
                <colgroup>
                    <col className={styles.col1} />
                    <col className={styles.col2} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>2.13~3.1</td>
                        <td>34기 서류 지원</td>
                    </tr>
                    <tr>
                        <td>3.3</td>
                        <td>1차 합격 발표</td>
                    </tr>
                    <tr>
                        <td>3.4~3.6</td>
                        <td>2차 면접(대면)</td>
                    </tr>
                    <tr>
                        <td>3.7</td>
                        <td>최종 합격 발표</td>
                    </tr>
                    <tr>
                        <td>3.8</td>
                        <td>개강총회</td>
                    </tr>
                </tbody>
            </table>
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
                            <span className={styles.icon} aria-hidden="true"></span>
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
        question: 'EC에서는 어떤 활동을 하나요?',
        answer: '1학기에 신입생분들은 학술부장의 주도 하에 C 스터디를 진행합니다. 2, 3학년의 경우, 인원을 모아 프로젝트나 CS지식 등 분야에 관계없이 자유롭게 스터디를 진행합니다. 2학기에는 팀을 형성하여 1학기에 쌓은 지식을 기반으로 다양한 프로젝트에 도전하게 됩니다.',
    },
    {
        question: '개발 경험이 거의 없는데, 활동할 수 있을까요?',
        answer: '네! EC는 열정 넘치는 사람들이 모여 함께 성장하는 것을 추구합니다. 따라서 개발 경험과 실력보다는 배우고자 하는 열정과 이루고자 하는 목표를 더 중요시합니다. 여러분의 뜨거운 열정을 기대하겠습니다!',
    },
    {
        question: 'EC에서 얻어갈 수 있는 것이 무엇인가요?',
        answer: 'EC에서는 선후배 간의 네트워킹, 세미나와 다양한 프로젝트를 통해 성장할 수 있는 소중한 경험을 제공합니다. 또한, 이를 토대로 각자의 포트폴리오를 구축할 수 있는 기회를 마련하고 있습니다.',
    },
    {
        question: '스터디 외에 어떤 다른 활동을 하나요?',
        answer: '스터디 외에 MT, 한강나들이, 짝선배-짝후배 등 친목 활동을 하며 동아리원들과의 추억을 쌓습니다. 이외에도 공부하다 지친다면 자유롭게 인원을 구성하여 놀러가셔도 됩니다.',
    },
    {
        question: 'EC만의 장점이 있나요?',
        answer: 'Endless Creation은 34년째 전통을 이어가고 있는 컴퓨터공학과에서 가장 오랜 역사를 자랑하는 동아리로, 그만큼 선배들이 쌓아놓은 자료들과 소통 창구가 잘 구성되어있습니다. 오랜 기간 동안 쌓인 노하우와 경험을 통해, 회원들이 보다 풍부한 학문적인 환경에서 성장할 수 있도록 최선을 다하고 있습니다.',
    },
    {
        question: '정기 세션과 세미나에서는 어떤 것들을 하나요?',
        answer: '정기 세션에서는 스터디 & 프로젝트의 진행 상황을 공유하고 발표하며 피드백을 주고 받는 시간을 가지며 세미나에서는 졸업한 선배들이 후배들을 위해 특강을 진행해 주십니다. 선배의 특강에는 분야별 공부 방법, 하는 일, 학교 생활 등을 주 컨텐츠로 다룹니다. 정기 세션과 세미나 종료 후에는 회원 간의 소통을 촉진하기 위해 회식이 준비되어 있습니다. 함께 지낸 시간을 더욱 소중하게 만들어 줄 특별한 순간들이 기다리고 있습니다.',
    }

];

export default Main;
