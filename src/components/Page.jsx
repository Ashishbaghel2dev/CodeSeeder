import React, { useState } from "react";
import MyCodeBlock from "./Code";


const serverCodeData = {
  title: "Express Server Setup",
  description: "Basic Express server setup with dotenv, cors, and routers.",
  code: `import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import cors from "cors";
import universityRouter from "./routes/universityRoute.js";
import userRouter from './routes/userRoute.js';
import filterRouter from './routes/filterRoute.js';
import universtyAboutRouter from "./routes/universityAboutRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};

app.get("/", (req, res) => {
  res.send({
    message: \`Server is running on \${PORT}\`
  });
});

ConnectDB();

app.listen(PORT, () => {
  console.log(\`Server is Running on port : \${PORT}\`);
});`,
};


function Page() {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(serverCodeData.code)
      .then(() => {
        setIsCopy(true); // Trigger copy feedback
        setTimeout(() => setIsCopy(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="w-full">
      <MyCodeBlock
        code={serverCodeData.code}
        language="js"
        isCopy={isCopy}
        handleCopy={handleCopy}
      />
    </div>
  );
}

export default Page;
