import { buildFeedBackPath, extractFeedBack } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackid;

  const filePath = buildFeedBackPath();
  const data = extractFeedBack(filePath);

  const selectedFeedback = data.find((item) => item.id === feedbackId);

  res.status(200).json({
    feedback: selectedFeedback,
  });
}

export default handler;
