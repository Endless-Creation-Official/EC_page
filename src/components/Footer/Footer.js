import React from 'react';
import styles from './Footer.module.css';

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
                    <div className={styles.seoultechMark}>
                        <img src="/seoultech.png" className={styles.seoultech} alt="seoultech"></img>
                    </div>
                    <b>Contact Us</b>
                    <div className={styles.contactImageContainer}>
                        <a href="https://misty-wildcat-563.notion.site/Endless-Creation-34-8c608f05fa4941b38e9222bab05067cc" target="_blank" rel="noopener noreferrer"><img src="/notion.png" alt="notion" className={styles.contactImage}></img></a>
                        <a href="https://endlesscreation.slack.com" target="_blank" rel="noopener noreferrer"><img src="/slack.png" alt="slack" className={styles.contactImage}></img></a>
                        <a href="https://github.com/Endless-Creation-32nd" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github" className={styles.contactImage}></img></a>
                        <a href="https://www.instagram.com/endless__creation?igsh=d3N4NHJoa3hiYm9o" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="instagram" className={styles.contactImage}></img></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;