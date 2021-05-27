import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import MainHeader from "./main-header";

const layout = (props) => {
  const notifCtx = useContext(NotificationContext);

  const activeNotif = notifCtx.notification;

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotif && (
        <Notification
          title={activeNotif.title}
          status={activeNotif.status}
          message={activeNotif.message}
        />
      )}
    </>
  );
};

export default layout;
