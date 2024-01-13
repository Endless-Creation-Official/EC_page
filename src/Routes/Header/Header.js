import { BrowserRouter as Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return (
        <div className={styles.Container}>
            <header id="main-header">
                <div class="header--container max-width-1200">
                <h1><a href="/"><img src="/ECmark.png" alt="ECmark" class="ECmark"/></a></h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">AboutUs</a></li>
                    <li><a href="/read/3">Members</a></li>
                    <li><a href="/Recruit">Recruit</a></li>
                </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;