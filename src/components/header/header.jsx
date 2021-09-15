import styles from './header.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Header = (props) => {
 const handlePos=(event)=>{
    let target=event.target.attributes.value.textContent;
    if(document.querySelector("#menuBar")){
        let menuHeight = document.querySelector("#menuBar").offsetHeight;
        let location =0;
        if(target==="introducePos"){
            location = document.querySelector("#introducePos").offsetTop;    
        }else if(target==="menuPos"){
            location = document.querySelector("#menuPos").offsetTop;
        }else if(target==="blogPos"){
            location = document.querySelector("#blogPos").offsetTop;
        }
        window.scrollTo({top:location - menuHeight+2, behavior:'smooth'});
    }

 }
 return(
     <header id="menuBar">
        <img className={styles.logo} src='/logo.jpg' alt="logo"/>
        <ul className={styles.navbar}>
            <li onClick={handlePos} value="homePos" className={styles.home}>홈</li>
            <li onClick={handlePos} value="introducePos" className={styles.introduce}>매장소개</li>
            <li onClick={handlePos} value="menuPos" className={styles.menu}>메 뉴</li>
            <li onClick={handlePos} value="blogPos" className={styles.blog}>블로그</li>
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