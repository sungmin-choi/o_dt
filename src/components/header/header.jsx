import styles from './header.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Header = (props) => {
 return(
     <header>
        <img className={styles.logo} src='/logo.jpg' alt="logo"/>
        <ul className={styles.navbar}>
            <li className={styles.home}>홈</li>
            <li className={styles.reservation}>음식점 예약</li>
            <li className={styles.introduce}>매장소개</li>
            <li className={styles.menu}>메 뉴</li>
            <li className={styles.blog}>블로그</li>
        </ul>
        <div className={styles.snsBox}>
        <a rel='noopener noreferrer' href="https://www.facebook.com/%EC%98%A4%EB%93%AF-102259498856036/?ref=nf&hc_ref=ARSEBzj7yqpwWHbrp8yyw2mYr23fPrONSAz23ZAHabcie2VYBigSZKm2iLcz97wh3Wg&__tn__=%3C-R"
        target='_blank'>
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF}/>
            </a>
            <a rel='noopener noreferrer' href="https://www.instagram.com/o.dt_gangmoon/" target='_blank'>
            <FontAwesomeIcon className={styles.instagram} icon={faInstagram}/>
            </a>
              
        </div>
    </header>

 );
}

export default Header;