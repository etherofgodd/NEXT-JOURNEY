import PostItem from "./post-item";
import styles from "./post-grid.module.css";

const PostGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          image={post.image}
          slug={post.slug}
        />
      ))}
    </ul>
  );
};

export default PostGrid;
