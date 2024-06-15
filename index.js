import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Registration_Routes } from "./Routes/RegistrationRoutes.js";
import { Course_Routes } from "./Routes/CourseRoutes.js";
import { Institute_Routes } from "./Routes/InstituteRoutes.js";
import { verifyRoutes } from "./Routes/VerificationRoutes.js";
let app = express();
mongoose
  .connect("mongodb+srv://RM:RM@cluster0.ymcif.mongodb.net/usman_db")
  .then(() => {
    console.log("Server is connected with database");
  })
  .catch((error) => {
    console.log({ error: "Error in index file" });
  });
app.use(express.json());
app.use(cors());
app.use("/User_Registration", Registration_Routes);
app.use("/Course", Course_Routes);
app.use("/Institutes", Institute_Routes);
app.use("/verification", verifyRoutes)
app.listen(1000, () => {
  console.log("Server is running");
});
