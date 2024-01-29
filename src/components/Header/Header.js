<<<<<<< HEAD
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
=======
// Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const navigationLinks = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/Aboutus' },
    { label: 'Members', link: '/Members' },
    { label: 'Recruit', link: '/Recruit' }
];

function Header() {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    const handleToggle = () => {
        setHamburgerOpen((prevIsHamburgerOpen) => !prevIsHamburgerOpen);
    };

    const handleNavigationClick = () => {
        window.scrollTo(0, 0);
        setHamburgerOpen(false);
    };

    useEffect(() => {
        const handleDocumentClick = (event) => {
            // Check if the click occurred outside the hamburger menu
            if (
                isHamburgerOpen &&
                event.target.closest(`.${styles.sidebar}`) === null &&
                event.target.closest(`.${styles.hamburger}`) === null
            ) {
                setHamburgerOpen(false);
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('click', handleDocumentClick);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isHamburgerOpen]);
    return (
        <div className={styles.headerContainer}>
            <i>
                <Link to="/" onClick={handleNavigationClick}>
                    <img
                        src={"/ECmark.png"}
                        alt="ECmark"
                        className={styles.ECmark}
                    />
                </Link>
            </i>

            {/* 모바일 버전 */}
            <div className={`${styles.sidebar} ${isHamburgerOpen ? styles.open : ''}`}>
                {navigationLinks.map(({ label, link }) => (
                    <li key={label}>
                        <Link to={link} onClick={handleNavigationClick}>
                            {label}
                        </Link>
                    </li>
                ))}
            </div>

            {/* pc 버전 */}
            <nav>
                <ul className={styles.navList}>
                    {navigationLinks.map(({ label, link }) => (
                        <li key={label}>
                            <Link to={link} onClick={handleNavigationClick}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                className={`${styles.hamburger} ${isHamburgerOpen ? styles.open : ''}`}
                type="checkbox"
                onClick={handleToggle}
            >
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
            </div>
        </div>
    );
>>>>>>> 42110e6d88da118e98a843862ae54dec32382ae5
}

export default Header;