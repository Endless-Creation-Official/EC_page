import Header from "../Header/Header";
import styles from "./Aboutus.module.css";
function Aboutus() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.box}>
                <div>
                    설립 날짜
                </div>
                <div>
                    1991년
                </div>
            </div>
            <div className={styles.box}>
                <div>
                    활동 인원
                </div>
                <div>
                    41명
                </div>
            </div>
            <div className={styles.box}>
                <div>
                    만든 프로젝트
                </div>
                <div>
                    90+
                </div>
            </div>
        </div>
    )
}

export default Aboutus;