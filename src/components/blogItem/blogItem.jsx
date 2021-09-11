import React from 'react';
import styles from './blogItem.module.css';
const BlogItem = (props) => {
    return(
        <a rel='noopener noreferrer' className={styles.link} target='_blank' href="https://blog.naver.com/dmswl6237?Redirect=Log&logNo=222494847703"><div className={styles.containner} >
            <p className={styles.title}><b>강문</b>해변맛집 :: 만족스러웠던 저녁식사! '<b>오듯</b>'에서 <b>보일링</b>해산... </p>
            <span className={styles.description}>
            #강릉여행 #1박2일강릉 #<b>강문</b>해변맛집 #<b>보일링</b>해산물 #분위기맛집 #강릉맛집 #블로그 #오랜만에... <b>강문</b>해변 초근접에 위치한 '<b>오듯</b>'이라는 해산물 전문 레스토랑이였어요! 블로그 리뷰나 방문자 리뷰가 하나도... ",
            "bloggername": "행복한 생각,세상에 없던 즐거움
            </span>
            <p className={styles.postDate}>20210904</p>
        
        </div>
        </a>
    )
}

export default BlogItem;