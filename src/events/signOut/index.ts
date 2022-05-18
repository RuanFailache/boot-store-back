import * as sessionServices from "@services/session";
import { EventResponse } from "..";

interface SignOutInput {
  userId: number;
}

export const signOutHandler = async ({
  userId,
}: SignOutInput): Promise<EventResponse> => {
  await sessionServices.closeSession(userId);
  return {
    status: 204,
  };
};
