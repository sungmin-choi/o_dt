import React from 'react';
import styles from './blogItem.module.css';
const BlogItem = ({blogItem}) => {
    return(
        <a rel='noopener noreferrer' className={styles.link} target='_blank' href={blogItem.link}>
            <div className={styles.containner} >
            <span className={styles.title}>{blogItem.title} |</span>  <span className={styles.postDate}>{blogItem.postDate} <br /> </span>
            <span className={styles.description}>{blogItem.description}
            </span>
            
        </div>
        <img src={blogItem.img} className={styles.thumbnail} alt="thumbnail" />
        </a>
    )
}

export default BlogItem;