// Header.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const navigationLinks = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/Aboutus" },
    { label: "Members", link: "/Members" },
    { label: "Recruit", link: "/Recruit" }
];

function Header() {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.headerContainer}>
            <i>
                <Link to="/" onClick={handleClick}>
                    <img
                        src={process.env.PUBLIC_URL + '/ECmark.png'}
                        alt="ECmark"
                        className={styles.ECmark}
                    />
                </Link>
            </i>
            <nav>
                <ul>
                    {navigationLinks.map(({ label, link }) => (
                        <li key={label}>
                            <Link to={link} onClick={handleClick}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
