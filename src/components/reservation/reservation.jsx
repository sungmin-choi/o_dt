import styles from './reservation.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./reservation.css";
import Gallery from '../gallery/gallery';
const Reservation = (props) => {
    const [startDate,setStartDate]=useState(null);
    
    return(
        <section className={styles.reservation}>
            <p className={styles.title}>온라인 예약</p>
            <div className={styles.container}>
            <div className={styles.selectBox}>
            <DatePicker className={styles.date} selected={startDate} onChange={(date) => setStartDate(date)}
            placeholderText="날짜" />
            <select   className={styles.time}>
                <option value="default" selected>예약시간</option>
                <option >옵션1</option>
                <option >옵션2</option>
                <option >옵션3</option>
            </select>
            <select  className={styles.people}>
                <option value="default" selected>예약인원</option>
                <option >옵션1</option>
                <option >옵션2</option>
                <option >옵션3</option>
            </select>
            <input  type="text" placeholder="성함" />
            <input  type="text" placeholder="전화번호" />
            <button className={styles.submitBtn}>예약하기</button>
            </div>
            <Gallery/>
            </div>
        </section>
    )
};

export default Reservation;