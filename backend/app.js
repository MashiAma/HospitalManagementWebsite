import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

// var cors = require('cors')
const app = express();
config({ path: "./config/config.env" });

// axios.defaults.headers.get['Accepts'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

// app.use(
//   cors(
    // origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    // method: ['Access-Control-Allow-Methods', "GET", "POST", "DELETE", "PUT"],
    // credentials: true,
//   )
// );

const corsConfig = {
  credentials: true,
  origin: true,
  method: [ "GET", "POST", "DELETE", "PUT"]
};
app.use(cors(corsConfig));

// const corsOptions = {
//   origin: FRONTEND_URL_ONE,
// };



app.use(cookieParser());
app.use(express.json());
// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
