import Image from "next/image";
import Button from "../ui/button";
import styles from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanreadabledate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} width={270} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanreadabledate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formatedddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
