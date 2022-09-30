import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import subscribersRouter from "./routes/subscribers.js";
import packagesRouter from "./routes/package.js";
import productRouter from "./routes/productsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import liveBoardsRouter from "./routes/liveboardsRoutes.js";
import LbBooking from "./routes/LbBookingsRoutes.js";
import resortsRoutes from "./routes/resortsRoute.js";
import cloudinary from "./cloudinary/cloudinary.js";

const PORT = process.env.PORT || "5000";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routes
app.use("/subscribers", subscribersRouter);
app.use("/user", userRouter);
app.use("/api/packages", packagesRouter);
app.use("/api/products/", productRouter);
app.use("/liveboard", liveBoardsRouter);
app.use("/lbBooings", LbBooking);
app.use("/api/resorts", resortsRoutes);

app.listen(PORT, () =>
  console.log(`Server is up and running on https://localhost:${PORT}`)
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
