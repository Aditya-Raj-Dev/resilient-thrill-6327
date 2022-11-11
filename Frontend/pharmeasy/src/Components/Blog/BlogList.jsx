
import React from 'react'
import BlogListCard from './BlogListCard'
import styles from '../../styles/blogList.module.css';



const BlogList = () => {
  return (
    <div className={styles.bloglist}>
        <div className={styles.bloglist_title}>
            <h2>Featured Posts</h2>
        </div>
        <hr />
        <div className={styles.bloglist_content}>
         <BlogListCard/>
         <BlogListCard/>
         <BlogListCard/>
         <BlogListCard/>
         <BlogListCard/>
           
        </div>
    </div>
  )
}

export default BlogList