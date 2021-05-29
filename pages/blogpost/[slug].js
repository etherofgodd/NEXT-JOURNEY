import PostContent from "../../components/post/post-content";
import { getPostData, getPostsFiles } from "../../helpers/post-utils";

const BlogPostPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context) {
  const { params } = context;

  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(context) {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  const paths = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPostPage;
