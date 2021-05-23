import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helpers/api-utils";

const FilteredEventPage = ({ hasError, filteredEvents, date_ }) => {
  const router = useRouter();

  // if (!filterData) {
  //   return <p className="center">Loading</p>;
  // }

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </>
    );
  }

  const date = new Date(date_.year, date_.month - 1);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true, // instead we'd use this as per there's error handling up there
      },
      // notFound: true, //could do this and show a standard 404 page.
      // redirect: {
      //   destination: "/error", //could also use this if there's an erro page
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      date_: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
export default FilteredEventPage;
