import { useRef, useState } from "react";

const HomePage = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedback, setFeedback] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();

    console.log("data :>> ", data);
  };

  const loadFeedback = async () => {
    const res = await fetch("/api/feedback");
    const data = await res.json();

    setFeedback(data.feedback);
  };

  return (
    <div>
      <h1>Hello World! Happy Hacking</h1>
      <form action="submit" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Your email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>
            {item.feedback} reviewed by {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
