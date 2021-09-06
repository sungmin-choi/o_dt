import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
    const year = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
                        <div className={styles.snsBox}>
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF}/>
            <FontAwesomeIcon className={styles.instagram} icon={faInstagram}/>  
        </div>
            <p className={styles.p1}>사업자등록번호:000-00-00000 &nbsp; &nbsp; TEL:033-651-4408 &nbsp; &nbsp;개인정보 책임자:최현진</p>
            <p className={styles.p2}>Copyright© {year} o_dt Restaurant</p>


        </footer>
    );
}

export default Footer;