import { events } from "../events";
import { Request, Response } from "express";
import ResponseError from "@utils/ResponseError";

export const handleEvent = async (req: Request, res: Response) => {
  const { data, type } = req.body;
  const event = events[type];
  try {
    if (event.schema) {
      const isValidData = event.schema.validate(data);
      if (isValidData.error) {
        throw new ResponseError(401, "Body in request is invalid!");
      }
    }
    if (event.protected) {
      data.userId = req.user?.id;
    }
    const response = await event.handler(data);
    res.status(response.status).send(response.data || "OK");
  } catch (err) {
    if (err instanceof ResponseError) {
      res.status(err.status).send(err.message);
      return;
    }
    res.sendStatus(500);
  }
};
