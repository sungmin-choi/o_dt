import styles from './blog.module.css';
import React from 'react';
import BlogItem from '../blogItem/blogItem';

const Blog = ({blogData}) =>{
    return(
        <div className={styles.containner}>
        <section className={styles.blog}>
        {
            blogData.map((ele,idx)=>{
                return <BlogItem key={idx} blogItem={ele}/>
            })
        }
        </section>
        </div>
    )
}

export default Blog;