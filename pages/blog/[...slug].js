import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>For the initial path listed above. Blog Post</h1>
    </div>
  );
};

export default BlogPostPage;
