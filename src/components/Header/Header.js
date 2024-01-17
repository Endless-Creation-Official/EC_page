// Header.js

import React from "react";
import styles from "./Header.module.css";

const navigationLinks = [
    { label: "Home", link: "http://www.HomepageAdress~.com" },
    { label: "About Us", link: "http://www.IntroducingAdress~.com" },
    { label: "Members", link: "http://www.MemberAdress~.com" },
    { label: "Recruit", link: "http://www.RecruitingPageAdress~.com" },
];

function Header() {
    return (
        <div className={styles.headerContainer}>
            <i>
                <a href="/">
                    <img
                        src={process.env.PUBLIC_URL + '/ECmark.png'}
                        alt="ECmark"
                        className={styles.ECmark}
                    />
                </a>
            </i>
            <nav>
                <ul>
                    {navigationLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
