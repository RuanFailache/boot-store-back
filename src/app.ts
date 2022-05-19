import express from "express";
import cors from "cors";

import { protectedRoute } from "./middleware/protectedEvent";
import { handleEvent } from "./middleware/handleEvent";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", protectedRoute, handleEvent);

app.listen(4000, () => {
  console.log("Listening at port 4000");
});

// process.on("unhandledRejection", (reason, promise) => {
//   const message = {
//     type: "Unhandled Rejection",
//     reason,
//     promise,
//   };
//   console.log("unhandledRejection", message);
// });

// process.on("uncaughtException", (err) => {
//   console.log("uncaughtException", JSON.stringify(err));
// });
