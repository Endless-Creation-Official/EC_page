import {
    BrowserRouter as Link
} from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return (
        <div className={styles.Container}>
            <div className={styles.mainHeader}>
                <div className={styles.ECmark}>
                    <Link to="/">
                        <img src="/ECmark.png" alt="ECmark" />
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    <Link to="/About">
                        <h1>Aboutsus</h1>
                    </Link>
                    <Link to="Members">
                        <h1>Members</h1>
                    </Link>
                    <Link to="Recruit">
                        <h1>Recruit</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;