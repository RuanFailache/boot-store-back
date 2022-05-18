export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export interface ValidateUserInput {
  email: string;
  password: string;
}
