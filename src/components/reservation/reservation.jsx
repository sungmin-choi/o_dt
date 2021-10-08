import styles from './reservation.module.css';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "./reservation.css";
import Gallery from '../gallery/gallery';
const Reservation = (props) => {
    return(
        <section className={styles.reservation}>
            <p className={styles.title}>온라인 예약</p>
            <button className={styles.rsBtn} onClick={()=>{alert("아직 준비중입니다!")}}><span className={styles.N}>N</span>  온라인 예약하기</button>
            <div className={styles.container}>
               
            <Gallery/>
            </div>
        </section>
    )
};

export default Reservation;