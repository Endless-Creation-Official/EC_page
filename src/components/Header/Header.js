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
        setHamburgerOpen(!isHamburgerOpen);
        // 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.headerContainer}>
            <i>
                <Link to="/" onClick={handleToggle}>
                    <img
                        src={process.env.PUBLIC_URL + '/ECmark.png'}
                        alt="ECmark"
                        className={styles.ECmark}
                    />
                </Link>
            </i>
            <div className={`${styles.sidebar} ${isHamburgerOpen ? styles.open : ''}`}>
                {navigationLinks.map(({ label, link }) => (
                    <li key={label}>
                        <Link to={link} onClick={handleToggle}>
                            {label}
                        </Link>
                    </li>
                ))}
            </div>
            <nav>
                <ul className={styles.navList}>
                    {navigationLinks.map(({ label, link }) => (
                        <li key={label}>
                            <Link to={link} onClick={handleToggle}>
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