import React from "react";
import styles from '../../styles/blogcard.module.css'
const BlogCard = () => {
  return (
    <div className={styles.blogcard}>
      <div className={styles.imgWrapper}>
        <img className={styles.card_img}
          src="https://blog-images.pharmeasy.in/2016/10/03085301/BlogImages_OCT-01-145x100.png"
          alt="card-img"
        />
      </div>
      <div className={styles.card_details}>
        <ul className={styles.card_points}>
          <li><span>Lorem, ipsum.</span></li>
          <li><span>Odio, eaque?</span></li>
          <li><span>Sit, at.</span></li>
        </ul> 
        <h3 className={styles.card_title}>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
    </div>
  );
};

export default BlogCard;
