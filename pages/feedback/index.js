import { useState } from "react";
import { buildFeedBackPath, extractFeedBack } from "../api/feedback";

const FeedbackPage = ({ feedback }) => {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedback = async (id) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();

    setFeedbackData(data.feedback);
  };

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>
            {item.feedback} reviewed by {item.email}{" "}
            <button onClick={loadFeedback.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps(context) {
  const filePath = buildFeedBackPath();
  const data = extractFeedBack(filePath);

  return {
    props: {
      feedback: data,
    },
  };
}

export default FeedbackPage;
