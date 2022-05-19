import Joi from "joi";

import { signInHandler, signInSchema } from "./signIn";
import { signOutHandler } from "./signOut";
import { signUpHandler, signUpSchema } from "./signUp";

export interface EventResponse {
  data?: unknown;
  status: number;
}

interface Event {
  handler: (params: any) => Promise<EventResponse>;
  schema?: Joi.ObjectSchema<any>;
  protected: boolean;
}

export const events: Record<string, Event> = {
  signUp: {
    handler: signUpHandler,
    schema: signUpSchema,
    protected: false,
  },
  signIn: {
    handler: signInHandler,
    schema: signInSchema,
    protected: false,
  },
  signOut: {
    handler: signOutHandler,
    protected: true,
  },
};
