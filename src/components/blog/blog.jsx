import styles from './blog.module.css';
import React from 'react';
import BlogItem from '../blogItem/blogItem';

const Blog = ({blogData}) =>{
    console.log(blogData);
    return(
        <section className={styles.containner}>
        {
            blogData.map((ele)=>{
                return <BlogItem blogItem={ele}/>
            })
        }
        </section>
    )
}

export default Blog;