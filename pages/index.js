import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

const HomePage = (props) => {
  const { featuredEvents } = props;

  return (
    <div>
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
