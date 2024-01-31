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
                    <img src="https://img1.daumcdn.net/thumb/C500x500/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jhenA17EwA0hMPpjb9z2iEx2--0.png" className={styles.aboutusImage} alt="example"></img>
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
            <h1>활동</h1>
            <div className={styles.activity}>
                <div className={styles.slideWrapper}>
                    <h2>growth & cooperation</h2>
                    <div className={styles.slideBox}>
                        <Slide slideImage = {growth}></Slide>
                    </div>
                </div>
                <div className={styles.slideWrapper}>
                    <h2>networking</h2>
                    <div className={styles.slideBox}>
                        <Slide slideImage = {networking}></Slide>
                    </div>
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
                    <img src="members_photo/강영훈.jpg" className={styles.profilePhoto} alt="YH"></img>
                    <div className={styles.centent}>
                        <div className={styles.name}>
                            <b>강영훈</b> / 회장
                        </div>
                        <div className={styles.introduction}>
                            <p>
                                ISTP이구요 좀 게으른 편입니다
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

const growth = [
    { imageLink: "./projectimage/duting-app.png", mainLink:"https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/33178048/186322211-26ec4031-cf03-4e75-8fe9-d9c5c2674858.png", mainLink: "https://github.com/Endless-Creation-32nd/refill-front" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128898118-1ada994a-e8b0-480f-b93a-c682f2ae6baa.gif", mainLink: "https://github.com/woori-hippy/hippy_front" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128905429-1cdcc41c-e570-4819-a112-608936563d79.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/152966700-aa767bc2-9e36-41c3-aa09-e5e3a87640e9.png", mainLink: "https://github.com/gom-3/dutying-web" }

];
const networking = [
    { imageLink: "./projectimage/duting-app.png", mainLink:"https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/33178048/186322211-26ec4031-cf03-4e75-8fe9-d9c5c2674858.png", mainLink: "https://github.com/Endless-Creation-32nd/refill-front" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128898118-1ada994a-e8b0-480f-b93a-c682f2ae6baa.gif", mainLink: "https://github.com/woori-hippy/hippy_front" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/28949165/128905429-1cdcc41c-e570-4819-a112-608936563d79.png", mainLink: "https://github.com/gom-3/dutying-web" },
    { imageLink: "https://user-images.githubusercontent.com/24623403/152966700-aa767bc2-9e36-41c3-aa09-e5e3a87640e9.png", mainLink: "https://github.com/gom-3/dutying-web" }

];
function Slide(props) {
    const {slideImage} = props;
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
