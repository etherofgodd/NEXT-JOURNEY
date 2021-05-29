import Head from "next/head";
import AllPosts from "../../components/post/all-post";
import { getAllPosts } from "../../helpers/post-utils";

// const dummy_post = [
//   {
//     title: "Getting Started with Nextjs",
//     date: "2022-02-10",
//     excerpt:
//       "Nexjs is a React Framework for production and makes building react app much productive and easy to optimize",
//     image: "getting-started-nextjs.png",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting Started with Nextjs",
//     date: "2022-02-10",
//     excerpt:
//       "Nexjs is a React Framework for production and makes building react app much productive and easy to optimize",
//     image: "getting-started-nextjs.png",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Getting Started with Nextjs",
//     date: "2022-02-10",
//     excerpt:
//       "Nexjs is a React Framework for production and makes building react app much productive and easy to optimize",
//     image: "getting-started-nextjs.png",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Getting Started with Nextjs",
//     date: "2022-02-10",
//     excerpt:
//       "Nexjs is a React Framework for production and makes building react app much productive and easy to optimize",
//     image: "getting-started-nextjs.png",
//     slug: "getting-started-with-nextjs4",
//   },
//   {
//     title: "Getting Started with Nextjs",
//     date: "2022-02-10",
//     excerpt:
//       "Nexjs is a React Framework for production and makes building react app much productive and easy to optimize",
//     image: "getting-started-nextjs.png",
//     slug: "getting-started-with-nextjs5",
//   },
// ];

const AllPostPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Post</title>
        <meta
          name="description"
          content="A list of all programming articles."
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostPage;
