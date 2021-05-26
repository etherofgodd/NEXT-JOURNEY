import { useRef } from "react";
import styles from "./newsletter-registration.module.css";
import { toast } from "react-toastify";

function NewsletterRegistration() {
  const emailInputRef = useRef();

  async function registrationHandler(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    data && toast.dark(data.message);
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
