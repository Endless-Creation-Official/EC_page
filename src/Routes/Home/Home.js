import styles from "./Home.module.css";
import Headers from "../../Components/Header"

function Home() {
    return (
        <div className={styles.Container}>
            <div className={styles.Headers}>
                <Headers />
            </div>
        </div>
    );
}

export default Home;