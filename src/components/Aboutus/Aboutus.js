/* Aboutus js*/
import React from "react";
import styles from "./Aboutus.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.slider}>
                    <img src="./networkingimage/정기세션타이틀.jpg" className={styles.aboutusImage} alt="example"></img>
                </div>
                <div className={styles.about}>
                    <div className={styles.head}>
                        <h2>About</h2>
                        <h1>Endless Creation</h1>
                    </div>
                    <p>
                        <b>Endless Creation</b>은 사람과 컴퓨터를 사랑하는 동아리로, 창립한 지 34년째 되는 서울과학기술대학교에서 가장 오래된 역사 깊은 동아리입니다.
                    </p>
                    <p className={styles.hiddenP}>
                        EC에서는 1학기 동안 C언어를 비롯한 프로그래밍 언어와 기초적인 CS지식에 대한 스터디를 통해 멤버들의 전문성을 키워나갑니다.
                        2학기에는 멤버들끼리 프로젝트를 기획하고 준비하는 시간을 가집니다.
                        다양한 주제와 도전적인 목표를 가진 프로젝트를 통해 실제 개발 경험을 쌓고 창의적인 문제 해결 능력을 키웁니다.
                        다양한 수준의 멤버들이 함께 모여 성장하고, 실전 경험을 쌓으며 자신의 능력을 한층 높일 수 있습니다.
                    </p>
                    <p>
                        EC는 많은 선배들이 성공적인 커리어를 쌓은 동아리로 자랐습니다.
                        멤버 간의 교류와 선배들의 멘토링을 통해, 우리는 멤버들 각자의 잠재력을 최대한 발휘할 수 있도록 지원합니다.
                    </p>
                    <p>
                        함께 성장하고, 함께 꿈을 향해 나아가는 우리 동아리에서 당신의 열정과 노력이 빛날 자리가 여러분을 기다리고 있습니다.
                        함께하는 즐거움과 성장하는 성취감을 느끼고 싶다면, EC에 참여해보세요!
                    </p>
                </div>
            </div>
            <Operator></Operator>
            <div className={styles.activity}>
                <h1>활동</h1>
                <div className={styles.slideBox}>
                    <h2>Netwroking</h2>
                    <Slide slideImage={networking}></Slide>
                </div>
                <div className={styles.slideBox}>
                    <h2>Cooperation</h2>
                    <Slide slideImage={cooperation}></Slide>
                </div>
            </div>
        </div>
    )
}

function Operator() {
    return (
        <div className={styles.operatorContainer}>
            <div className={styles.operator}>
                <h2>EC 34th</h2>
                <h1>운영진</h1>
            </div>
            <section className={styles.operators}>
                <div className={styles.operatorcard}>
                    <img src="members_photo/강영훈.png" className={styles.profilePhoto} alt="YH"></img>
                    <div className={styles.centent}>
                        <div className={styles.name}>
                            <b>강영훈</b> / 회장
                        </div>
                        <div className={styles.introduction}>
                            <p>
                                열심히 하는 중
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.operatorcard}>
                    <img src="members_photo/김경태1.jpg" className={styles.profilePhoto} alt="KT"></img>
                    <div className={styles.centent}>
                        <div className={styles.name}>
                            <b>김경태</b> / 부회장
                        </div>
                        <div className={styles.introduction}>
                            <p>
                                함께 성장해요! 질문은 언제나 환영입니다
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.operatorcard}>
                    <img src="members_photo/박진홍.jpeg" className={styles.profilePhoto} alt="YH"></img>
                    <div className={styles.centent}>
                        <div className={styles.name}>
                            <b>박진홍</b> / 학술부장
                        </div>
                        <div className={styles.introduction}>
                            <p>
                                EC의 자랑이 되어주세요!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.operatorcard}>
                    <img src="members_photo/김병호.jpeg" className={styles.profilePhoto} alt="KT"></img>
                    <div className={styles.centent}>
                        <div className={styles.name}>
                            <b>김병호</b> / 홍보부장
                        </div>
                        <div className={styles.introduction}>
                            <p>
                                해치지않아요~
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const networking = [
    { imageLink: "./networkingimage/정기세션1.jpg", mainLink: "선배특강2" },
    { imageLink: "./networkingimage/정기세션2.jpg", mainLink: "선배특강2" },
    { imageLink: "./networkingimage/정기세션3.jpg", mainLink: "선배특강2" },
    { imageLink: "./networkingimage/선배특강.jpg", mainLink: "선배특강2" },
    { imageLink: "./networkingimage/세미나네트워킹.jpg", mainLink: "선배특강2" },
    { imageLink: "./networkingimage/정기세션단체사진.jpg", mainLink: "선배특강2" }
];
const cooperation = [
    { imageLink: "./cooperationimage/세미나회식.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/하계MT단체1.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/하계MT단체2.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/하계MT단체3.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/하계MT단체4.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/한강1.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/한강2.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" },
    { imageLink: "./cooperationimage/한강4.jpg", mainLink: "하계MT 가평역에서찍은 단체사진" }
];
function Slide(props) {
    const { slideImage } = props;
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
        slideImage.map(element => (
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



export default Main;
