import styles from "./Home.module.css";
import React, { useState, useEffect, useRef } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.maintitle}>
                <div className={styles.title}>
                    <h1>Endless Creation</h1>
                    <h2 className={styles.textbox}>34기 모집 예정!</h2>
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
    const endingMemberCount = 37;
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
                    <div className={styles.identityTitle}>growth</div>
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
    { imageLink: "https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128905429-1cdcc41c-e570-4819-a112-608936563d79.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/152966700-aa767bc2-9e36-41c3-aa09-e5e3a87640e9.png", mainLink: "https://github.com/gom-3/dutying-web" }

];
function ProjectSlide() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true

    };

    const randerSlides = () => (
        projects.map(element => (
            <div className={styles.projectImageContainer}>
                <img src={element.imageLink} className={styles.imagesize} alt={element.mainLink}></img>
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
                        <td>~ 2.15</td>
                        <td>34기 서류 지원</td>
                    </tr>
                    <tr>
                        <td>2.17</td>
                        <td>1차 합격 발표</td>
                    </tr>
                    <tr>
                        <td>2.18 ~ 2.20</td>
                        <td>2차 면접(대면)</td>
                    </tr>
                    <tr>
                        <td>2.22</td>
                        <td>최종 합격 발표</td>
                    </tr>
                    <tr>
                        <td>2.24</td>
                        <td>워크샵</td>
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
        question: '자주하는 질문1',
        answer: '설명',
    },
    {
        question: '자주하는 질문2',
        answer: '설명',
    },
    {
        question: '자주하는 질문3',
        answer: '설명',
    },
    {
        question: '자주하는 질문4',
        answer: '설명',
    },
    {
        question: '자주하는 질문5',
        answer: '설명',
    },
];

export default Main;