import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';

const contactLink = [
    {content: 'Git Hub', link: 'www.깃허브링크'},
    {content: 'Notion', link: 'www.노션브링크'},
    {content: 'Slack', link: 'www.슬랙링크'},
    {content: 'Facebook/Instragram', link: 'www.페이스북/인스타그램링크'}
]

function Footer(){
    return(
        <footer>
            <div>
                <b>made & degined</b>
                <ul>
                    <li>32기 강영훈</li>
                    <li>32기 김경태</li>
                    <li>33기 박진홍</li>
                </ul>
            </div>
            <div>
                <b>Contact Us</b>
                <ul>
                    {contactLink.map(({content, link}) => (
                        <li key={content}>
                            <Link to={link}>
                                {content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;