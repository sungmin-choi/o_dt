import styles from './reservation.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservation = (props) => {
    const [startDate,setStartDate]=useState(new Date());

    return(
        <section className={styles.reservation}>
            <p className={styles.title}>온라인 예약</p>
            <div className={styles.selectBox}>
            <DatePicker className={styles.date} selected={startDate} onChange={(date) => setStartDate(date)} />
            <select className={styles.time}>
                <option selected>예약시간</option>
                <option>옵션1</option>
                <option>옵션2</option>
                <option>옵션3</option>
            </select>
            <select className={styles.people}>
                <option selected>예약인원</option>
                <option>옵션1</option>
                <option>옵션2</option>
                <option>옵션3</option>
            </select>
            <button className={styles.submitBtn}>예약하기</button>
            </div>
            
        </section>
    )
};

export default Reservation;