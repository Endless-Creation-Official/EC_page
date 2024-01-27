import React from "react";
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


function Main() {
    const members = [
        {
            name: "강영훈",
            term: "32기",
            skills: ["React", "Web", "Mobile"],
            image: "members_photo/강영훈.jpg",
            description: "ISTP이구요 좀 게으른 편입니다"
        },
        {
            name: "김경태",
            term: "32기",
            skills: ["Web", "Back-end", "ML", "AI"],
            image: "members_photo/김경태.png",
            description: "성장하는 즐거움!"
        },
        {
            name: "박진홍",
            term: "33기",
            skills: ["React"],
            image: "https://img1.daumcdn.net/thumb/C500x500/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jhenA17EwA0hMPpjb9z2iEx2--0.png",
            description: "안녕하세요~"
        },
        {
            name: "홍준희",
            term: "31기",
            skills: ["ML"],
            image: "/profile.png",
            description: "19학번이고 25살입니다"
        },
        {
            name: "유환욱",
            term: "28기",
            skills: ["Front-end", "Web", "React"],
            image: "/profile.png",
            description: "매순간 최선을 다하는 사람이 되고 싶습니다!"
        },
        {
            name: "조재영",
            term: "28기",
            skills: ["Spring","iOS"],
            image: "members_photo/조재영.png",
            description: "이름은 조재영이고, 99년생 입니다.."
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
            image: "members_photo/오예진.png",
            description: ""
        },
        {
            name: "정태현",
            term: "29기",
            skills: ["AI"],
            image: "/profile.png",
            description: "모두들 파이팅! 감사합니다~"
        },
        {
            name: "김상현",
            term: "30기",
            skills: ["iOS"],
            image: "members_photo/김상현.jpeg",
            description: "ESTJ / 성격이 활발한 편입니다!"
        },
        {
            name: "손창준",
            term: "30기",
            skills: ["Spring"],
            image: "/profile.png",
            description: "손창준 / 20학번 00년생입니다!"
        },
        {
            name: "곽용진",
            term: "31기",
            skills: ["AI","Game"],
            image: "/profile.png",
            description: ""
        },
        {
            name: "문효재",
            term: "31기",
            skills: ["Android"],
            image: "/profile.png",
            description: "새로운 사람들과 친해지는 것을 좋아합니다!"
        },
        {
            name: "정다운",
            term: "31기",
            skills: ["ML","Front-end","Data"],
            image: "members_photo/정다운.jpg",
            description: "논리적이고 적게 일하고 많이 얻는게 좋아요..^^"
        },
        {
            name: "한가을",
            term: "31기",
            skills: ["Java","Spring","Back-end"],
            image: "members_photo/한가을.jpg",
            description: "조용하고 낯가림이 심해요. ㅇㅅㅇ,,,"
        },
        {
            name: "김정효",
            term: "32기",
            skills: ["Game","Unity"],
            image: "members_photo/김정효.png",
            description: "둥글둥글한 성격이에요!"
        },
        {
            name: "김현중",
            term: "32기",
            skills: ["Game"],
            image: "/profile.png",
            description: "왠만하면 금방 친해지는 스타일입니다!"
        },
        {
            name: "이동준",
            term: "32기",
            skills: ["Spring"],
            image: "members_photo/이동준.jpeg",
            description: "성장하는 것에 관심이 많습니다!"
        },
        {
            name: "이현화",
            term: "32기",
            skills: ["Mobile","iOS"],
            image: "members_photo/이현화.jpg",
            description: "반갑습니당! 동아리 활동 열심히 할게요~~"
        },
        {
            name: "정지원",
            term: "32기",
            skills: ["Back-end","Spring","Java"],
            image: "/profile.png",
            description: "EC 화이팅!"
        },
        {
            name: "송진현",
            term: "33기",
            skills: ["Game","Web","Unity"],
            image: "members_photo/송진현.jpg",
            description: "23학번 송진현입니다!!"
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.membertitle}>
                <h1>EC members</h1>
            </div>
            <section className={styles.membercontents}>
                {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </section>
        </div>
    );
}


export default Main;