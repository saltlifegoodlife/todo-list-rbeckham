import express from "express";
import cors from "cors";
import config from "./config/index.js";
// TODO: import router from routes/
import Router from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(cors());

// TODO: use the imported router to handle all requests
app.use("/api", Router);
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
