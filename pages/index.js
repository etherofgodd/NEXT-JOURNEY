import FeaturedPost from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPost } from "../helpers/post-utils";

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

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPost post={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
