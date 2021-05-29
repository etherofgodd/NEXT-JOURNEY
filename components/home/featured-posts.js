import PostGrid from "../post/post-grid";
import styles from "./featured-posts.module.css";

const FeaturedPost = ({ post }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={post} />
    </section>
  );
};

export default FeaturedPost;
