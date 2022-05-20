import Joi from 'joi'
import { addProductToCartHandler } from './addProductToCart'
import { listProductsHandler } from './listProducts'
import { listProductsAsLoggedUserHandler } from './listProductsAsLoggedUser'
import { markProductAsFavoriteHandler } from './markProductAsFavorite'
import { removeProductFromCartHandler } from './removeProductFromCart'
import { signInHandler, signInSchema } from './signIn'
import { signOutHandler } from './signOut'
import { signUpHandler, signUpSchema } from './signUp'
import { unmarkProductAsFavoriteHandler } from './unmarkProductAsFavorite'

export interface EventResponse {
  data?: unknown
  status: number
}

interface Event {
  handler: (params: any) => Promise<EventResponse>
  schema?: Joi.ObjectSchema<any>
  protected: boolean
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
  listProducts: {
    handler: listProductsHandler,
    protected: false,
  },
  listProductsAsLoggedUser: {
    handler: listProductsAsLoggedUserHandler,
    protected: true,
  },
  addProductToCart: {
    handler: addProductToCartHandler,
    protected: true,
  },
  removeProductFromCart: {
    handler: removeProductFromCartHandler,
    protected: true,
  },
  markProductAsFavorite: {
    handler: markProductAsFavoriteHandler,
    protected: true,
  },
  unmarkProductAsFavorite: {
    handler: unmarkProductAsFavoriteHandler,
    protected: true,
  },
}
