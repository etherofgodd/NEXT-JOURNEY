import fs from "fs";
import path from "path";

export const buildFeedBackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedBack = (filePath) => {
  const fileData = fs.readFileSync(filePath);

  const data = JSON.parse(fileData);
  return data;
};

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = buildFeedBackPath();

    const data = extractFeedBack(filePath);

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success Feedback recieved" });
  } else {
    const filePath = buildFeedBackPath();

    const data = extractFeedBack(filePath);

    res.status(200).json({
      feedback: data,
    });
  }
}

export default handler;
