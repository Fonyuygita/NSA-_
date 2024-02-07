import React from 'react';

import Image from 'next/image';
import styles from "./singlePage.module.css"

const PostPage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.postImage}
        src="https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Post Image"
        objectFit='cover'
        width={400}
        height={340}

      />
      <div className={styles.userInfo}>
        <Image
          className={styles.avatar}
          src="/s17.png"
          alt="User Avatar"
          width={50}
          height={50}
        />
        <div className={styles.details}>
          <h2 className={styles.userName}>John Doe</h2>
          <p className={styles.date}>February 7, 2024</p>
        </div>
      </div>
      <h1 className={styles.postTitle}>Post Title</h1>
      <p className={styles.postDescription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio minima impedit quibusdam nisi quis, natus ipsum? Magnam, consectetur sapiente. Praesentium, eaque unde! Inventore nobis, neque autem incidunt eligendi aliquid earum libero ipsum architecto velit quis, sunt in esse. Ex delectus, dolor illo omnis sapiente eveniet! Quam nam expedita pariatur molestias adipisci, laborum modi saepe omnis commodi tempore blanditiis numquam itaque ex velit error illo? Commodi maxime reiciendis saepe, perspiciatis corporis libero quibusdam, quo dolor atque vero architecto consequatur, quisquam similique asperiores qui sint dolorum quod provident eligendi nam. Debitis quod fugiat velit iusto perspiciatis quae ipsum reiciendis omnis delectus voluptatum quas quos hic, maiores ab sequi provident fuga consequuntur.
      </p>
    </div>
  );
};

export default PostPage;