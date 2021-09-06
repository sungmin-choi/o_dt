import styles from './home.module.css';
import React from 'react';

const Home = (props) => {
    return(
        <main className={styles.main} style={{backgroundImage:'url(/image/restaurant.jpg)'}}>
            <div className={styles.titlebox}>
                <span className={styles.title}>{`o'dt`}</span>
                <span className={styles.description}>퓨전 해산물 레스토랑 <br />싱그러운  메뉴들로 분위기 있는 감성포차</span>
                <span className={styles.description2}>#강문오듯 #강릉오듯 #감성포차</span>
            </div>
            <button className={styles.resbtn}>예약하기</button>
        </main>
    )
}

export default Home;