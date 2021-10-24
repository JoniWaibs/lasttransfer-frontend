import { ICreateValues, ILoginValues } from "./Form";

export interface AuthState {
  token: string,
  isAuthenticated: boolean,
  user: {
    email: string,
    exp: number,
    iat: number,
    name: string,
    uid: string,
  },
  message: string,
  statusCode: number,
  loginUser: (payload: ILoginValues) => void,
  createUser: (payload: ICreateValues) => void,
  getUserAuthenticated: () => void,
}

export type AuthAction = {
  type: string,
  payload: any,
}

