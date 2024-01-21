import React from "react";
import styles from "./Members.module.css";
import Header from "../Header/Header"

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
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/7180cbff-52d3-4e30-ac6a-66bf4506b454/KakaoTalk_20220225_110523300.jpg?id=692dc0ca-ab0a-423a-b612-2d02afe58f99&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705824000000&signature=khi5fuAYVFUfA-p6Yy5-8tMzQte1iFsvwzgsRKYQ914&downloadName=KakaoTalk_20220225_110523300.jpg",
            description: "ISTP이구요 좀 게으른 편입니다"
        },
        {
            name: "김경태",
            term: "32기",
            skills: ["Web", "Mobile"],
            image: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F74219185-16d7-4a89-9818-37331851ad35%2F20220528_132044.jpg?table=block&id=c0563a0b-40e7-4b94-ac31-ba610582d7d9&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&width=2000&userId=4841d5f9-c7e0-48fe-80fc-fc9539bf4a87&cache=v2",
            description: "ENTJ 활발그자체"
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
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/041d23c5-07be-4bd8-86e4-47b91a24002f/Untitled.png?id=3e64dad6-34d6-41c0-9403-1a3ab015a55d&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=Yhl6ami5fGeUTVDrRLGj51zPPiBg_Df2BIMBxhP88Yg&downloadName=Untitled.png",
            description: "이름은 조재영이고, 99년생 입니다.."
        },
        {
            name: "김현종",
            term: "29기",
            skills: ["Game"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/db158569-1f90-4f07-9075-0d389dfd1763/profile.jpg?id=ecc2c6ac-7da5-41d8-a087-d48b9b8368bd&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=pouAFxHWrDe7tR7n7ICECh75Ivau_FrqWGa_HLZLE_I&downloadName=profile.jpg",
            description: "시도해 보고 싶은 것이 많습니다!"
        },
        {
            name: "오예진",
            term: "29기",
            skills: ["React"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/8f0836ce-cca1-4d46-a392-f97044bb60ba/Untitled.png?id=c8953f42-79c0-4532-9538-5dbc38e62b2d&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=ahkRDyVsnA9b4hZPQWr58IfGvYLWd4lI_VeebJ32p1s&downloadName=Untitled.png",
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
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/e5d831a1-d182-4858-9a74-b4e35b5d1ba8/IMG_1564.jpeg?id=73a788d2-6b91-478b-a880-a60da16a0f42&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=WdKTPHRe9_3Q--KfDL9ATMvHyI__us0VbtMjtwQU7i8&downloadName=IMG_1564.jpeg",
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
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/d1e383af-b2c5-4de7-a689-cc626940f8fb/KakaoTalk_20220308_183617395.jpg?id=1607f933-288b-43d1-80f9-df3c70000b8d&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=HzMos8OPru1nkpDnd-ggq2f9GOJPLx8n3_Qyx-_DtbM&downloadName=KakaoTalk_20220308_183617395.jpg",
            description: "논리적이고 적게 일하고 많이 얻는게 좋아요..^^"
        },
        {
            name: "한가을",
            term: "31기",
            skills: ["Java","Spring","Back-end"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/dba77970-cbc9-48c0-a026-28f3b0a4272b/KakaoTalk_20220307_164831133.jpg?id=0e66ead6-4a56-4be2-ab97-965b30543c3a&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=maP2rrkar30eU2J9q3K3LYM53HRGqsy1eFkXn935c3g&downloadName=KakaoTalk_20220307_164831133.jpg",
            description: "조용하고 낯가림이 심해요. ㅇㅅㅇ,,,"
        },
        {
            name: "김정효",
            term: "32기",
            skills: ["Game","Unity"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/3fac8c6a-3763-49f6-a329-3dbc36359276/Untitled.png?id=551b1684-b89b-46a0-be02-98b5f87b5e17&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=fhMNoWndVZqj__CxK-QC5swQ86ad4e8_e7Rr5lMZcQQ&downloadName=Untitled.png",
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
            name: "류진혁",
            term: "32기",
            skills: ["Android","AI"],
            image: "/profile.png",
            description: "많이 부족하지만 열심히 배우겠습니다!! 홧팅!"
        },
        {
            name: "백수진",
            term: "32기",
            skills: ["iOS","Game","Java"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/6708a4a0-84d0-40fe-9d64-0680892ed666/D218263E-6429-4D83-ACB5-8C676F079C17.png?id=191d09eb-e49e-414a-bdd0-c125329b9011&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=OM2uKAONircQ3rXePxk39z0jINeR5M99XZjJjPpJy9k&downloadName=D218263E-6429-4D83-ACB5-8C676F079C17.png",
            description: "지독한 앱등이라 맥북 사용 중입니다.!"
        },
        {
            name: "이동준",
            term: "32기",
            skills: ["Spring"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/2220a616-0580-41a6-b156-0483ebdf5118/ABF34C67-87BE-4CF1-8CD1-354B52286A1F.jpeg?id=d8aac194-72e2-4a9c-be4b-a959d59cc9d3&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=JXmSz6E86B-CTidC9BaHd2lHCd1fXduue6JrYEU8JqQ&downloadName=ABF34C67-87BE-4CF1-8CD1-354B52286A1F.jpeg",
            description: "성장하는 것에 관심이 많습니다!"
        },
        {
            name: "이현화",
            term: "32기",
            skills: ["Mobile","iOS"],
            image: "https://file.notion.so/f/f/e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4/25617cbe-63b1-44ba-9543-e087993ab345/2.jpg?id=cff00d03-85f2-463b-b280-203a6ef167e3&table=block&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&expirationTimestamp=1705860000000&signature=VlwidkhPwtzX49lODmA89JrIBIA7XEYQutGHys4kWRs&downloadName=2.jpg",
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
            image: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F57187411-5649-4333-8112-ea03bdcdbc9f%2FKakaoTalk_20230316_005455554.jpg?table=block&id=fcadc490-aa03-45b1-a2d8-23c45760a8dc&spaceId=e7a0fe55-4730-44f6-9a1f-5dbe79c25ad4&width=1790&userId=4841d5f9-c7e0-48fe-80fc-fc9539bf4a87&cache=v2",
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


function Members() {
    return (
        <div>
            <Header></Header>
            <Main></Main>
        </div>
    )
}

export default Members;