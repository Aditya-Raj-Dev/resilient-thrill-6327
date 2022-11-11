
import React from 'react'
import BlogCard from './BlogCard'
import styles from '../../styles/blogbox.module.css'

const BlogBox = () => {
  return (
    <div className={styles.blogbox}>
        <div className={styles.blogbox_header}>
          <h2>Chronic Ailments</h2>
        </div>

        <div className={styles.blogbox_content}>
          <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
            <BlogCard/>
            <BlogCard/>
          </div>
          <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
            <BlogCard/>
            <BlogCard/>
          </div>

          <div className={styles.blog_boxScroller}>
            <button>
              Prev
            </button>
            <button>
              Next
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default BlogBox