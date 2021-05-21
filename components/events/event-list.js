import EventItem from "./event-item";
import styles from "./event-list.module.css";
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          location={item.location}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
