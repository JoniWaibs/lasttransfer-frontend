import { AxiosResponse } from "axios";
import { ICreateValues, ILoginValues } from "./Form";

export interface Service {
  create(payload: ICreateValues):  Promise<AxiosResponse>;
  login(payload: ILoginValues):  Promise<AxiosResponse>;
  getUser(): Promise<AxiosResponse>;
}
