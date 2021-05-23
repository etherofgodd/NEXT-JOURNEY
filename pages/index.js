<<<<<<< HEAD
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

const HomePage = ({ products }) => {
=======
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

const HomePage = (props) => {
  const { featuredEvents } = props;

>>>>>>> newbranch
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

<<<<<<< HEAD
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
  };
}
=======
export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

>>>>>>> newbranch
export default HomePage;
