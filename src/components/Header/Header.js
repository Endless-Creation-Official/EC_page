import { BrowserRouter as Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return (
        <div className={styles.Container}>
            <div className={styles.mainHeader}>
                <div className={styles.headerContainerMaxWidth1200}>
                    <div>
                        <a href="/"><img src="/ECmark.png" alt="ECmark" className={styles.ECmark}/></a>
                    </div>
                    <div className={styles.tags}>
                        <a href="/">Home</a>
                        <a href="/About">AboutUs</a>
                        <a href="/read/3">Members</a>
                        <a href="/Recruit">Recruit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;