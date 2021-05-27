import { useContext, useRef } from "react";
import styles from "./newsletter-registration.module.css";
import { toast } from "react-toastify";
import NotificationContext from "../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notifCtx = useContext(NotificationContext);

  async function registrationHandler(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;

    notifCtx.showNotification({
      title: "Signing Up",
      message: "Registering for a news letter",
      status: "pending",
    });
    toast.info("Operation Pending");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.dark("Successful");
        notifCtx.showNotification({
          title: "Success!",
          message: "Registeration Successfull",
          status: "success",
        });
      } else {
        toast.error("Error registering");
        notifCtx.showNotification({
          title: "ERROR!",
          message: "Registeration ERROR",
          status: "error",
        });
      }
    } catch (error) {
      if (error) {
        toast.error(error.message);
        notifCtx.showNotification({
          title: "ERROR!",
          message: error.message || "Registeration ERROR",
          status: "error",
        });
      }
    }
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
