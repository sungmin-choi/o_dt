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
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF}/>
            <FontAwesomeIcon className={styles.instagram} icon={faInstagram}/>  
        </div>
    </header>

 );
}

export default Header;