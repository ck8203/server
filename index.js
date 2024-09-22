require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./database");

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   const allowedOrigin = process.env.ALLOWED_ORIGIN;
//   if (req.headers.origin === allowedOrigin) {
//     res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
//   }
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });

const cors = require("cors");
app.use(cors());

const router = require("./routes");
app.use("/api", router);

const port = process.env.PORT;

async function startServer() {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}
startServer();
