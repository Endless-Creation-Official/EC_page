import styles from "./Home.module.css";
import Header from "../Header/Header"

function Home() {
    return (
        <div className={styles.Container}>
            <div className={styles.Headers}>
                <Header />
            </div>
            <div className={styles.mainTitle}>
                <h1>성장하는 즐거움!</h1>
                <div id="element"><h1>Endless Creation</h1></div>
                <h2 className={styles.textBox}>34기 모집 예정!</h2>
            </div>
        </div>
    );
}

export default Home;