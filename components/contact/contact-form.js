import { useState } from "react";
import { toast } from "react-toastify";
import stlyes from "./contact-form.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendMessageHandler(e) {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      toast.dark("SuccessFully saved");
    }
  }

  return (
    <section className={stlyes.contact}>
      <h1>How can I help you?</h1>
      <form className={stlyes.form} onSubmit={sendMessageHandler}>
        <div className={stlyes.controls}>
          <div className={stlyes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={stlyes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={stlyes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={stlyes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
