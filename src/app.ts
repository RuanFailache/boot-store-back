import express from "express";
import cors from "cors";

import { protectedRoute } from "./middleware/protectedEvent";
import { handleEvent } from "./middleware/handleEvent";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", protectedRoute, handleEvent);

app.listen(4000);
