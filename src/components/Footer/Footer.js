import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const contactLink = [
    { content: 'Git Hub', link: 'www.깃허브링크' },
    { content: 'Notion', link: 'www.노션브링크' },
    { content: 'Slack', link: 'www.슬랙링크' },
    { content: 'Facebook/Instragram', link: 'www.페이스북/인스타그램링크' }
]

function Footer() {
    return (
        <footer>
            <div className={styles.wraper}>
                <div className={styles.madeMember}>
                    <div className={styles.endlessCreation}>
                        Endless Creation
                    </div>
                    <div className={styles.designedby}>
                        designed by&nbsp;&nbsp; 강영훈&nbsp; 김경태&nbsp; 박진홍
                    </div>
                    <div className={styles.copyright}>
                        Copyright ⓒ Endless Creation 2024
                    </div>
                </div>
                <div className={styles.contact}>
                    <b>Contact Us</b>
                    <div className={styles.contactImageContainer}>
                        <img src="/notion.png" alt="notion" className={styles.contactImage}></img>
                        <img src="/slack.png" alt="slack" className={styles.contactImage}></img>
                        <img src="/github.png" alt="github" className={styles.contactImage}></img>
                        <img src="/instagram.png" alt="instagram" className={styles.contactImage}></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;