// Header.js

import React, { useState } from 'react';
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
        // handleToggle이 눌리면
        setHamburgerOpen((prevIsHamburgerOpen) => {
            // 새로운 상태값 반환
            return !prevIsHamburgerOpen;
        });
    };

    // 네비게이션을 눌렀을 때
    const handleNavigationClick = () => {
        // 스크롤 맨 위로 하고
        window.scrollTo(0, 0);
        // 햄버거 상태를 닫음
        setHamburgerOpen(false);
    };
    return (
        <div className={styles.headerContainer}>
            <i>
                <Link to="/" onClick={handleNavigationClick}>
                    <img
                        src={process.env.PUBLIC_URL + '/ECmark.png'}
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
}

export default Header;