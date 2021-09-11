import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
    const year = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
                        <div className={styles.snsBox}>
            <a rel='noopener noreferrer'target='_blank' href="https://www.facebook.com/%EC%98%A4%EB%93%AF-102259498856036/?ref=nf&hc_ref=ARSEBzj7yqpwWHbrp8yyw2mYr23fPrONSAz23ZAHabcie2VYBigSZKm2iLcz97wh3Wg&__tn__=%3C-R">
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF}/>
            </a>
            
            <a  rel='noopener noreferrer' href="https://www.instagram.com/o.dt_gangmoon/" target='_blank'>
            <FontAwesomeIcon className={styles.instagram} icon={faInstagram}/>
            </a>
        </div>
            <p className={styles.p1}>사업자등록번호:000-00-00000 &nbsp; &nbsp; TEL:033-651-4408 &nbsp; &nbsp;개인정보 책임자:최현진</p>
            <p className={styles.p2}>Copyright© {year} o_dt Restaurant</p>


        </footer>
    );
}

export default Footer;