import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
import Head from "next/head";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Next js Event center</title>
        <meta
          name="description"
          content="Contains a list of events available in next js"
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
