import React from "react";
import styles from '../../styles/blogListCard.module.css';

const BlogListCard = () => {
  return (
    <div className={styles.blogList_card}>
      <div className={styles.blogList_card_imgWrapper}>
        <img
          src="https://blog-images.pharmeasy.in/2022/11/09174809/1-5-145x100.jpg"
          alt="list_card"
        />
      </div>
      <div className={styles.blogList_card_titleWrapper}>
        <p>Breast Cancer: Foods To Have And Avoid During And After Treatment</p>
      </div>
    </div>
  );
};

export default BlogListCard;
