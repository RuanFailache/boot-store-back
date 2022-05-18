import { events } from "../events";
import ResponseError from "@utils/ResponseError";
import { NextFunction, Request, Response } from "express";
import * as sessionServices from "@services/session";

export const protectedRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const event = events[req.body.type];
  try {
    if (event.protected) {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new ResponseError(
          401,
          "User must be logged to access this event!"
        );
      }
      const token = authorization.replace("Bearer ", "");
      const session = await sessionServices.validateSession(token);
      if (!session) {
        throw new ResponseError(
          401,
          "User must be logged to access this event!"
        );
      }
      req.user.id = session.userId;
    }
    next();
  } catch (err) {
    if (err instanceof ResponseError) {
      res.status(err.status).send(err.message);
    }
  }
};
