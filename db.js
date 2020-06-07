import mongooes from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongooes.connect(process.env.MONGODB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongooes.connection;

const handleError = () => {
  console.error("⛔ connection error: ");
};

const handleOpen = () => {
  console.log("✅ Connected to DB");
};

db.on("error", handleError);
db.once("open", handleOpen);
