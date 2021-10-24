
import { AxiosResponse } from "axios";
import { restClient } from "../config";
import { ICreateValues, ILoginValues } from "../Types/Form";
import { Service } from "../Types/Service";

const apiBasePath: string = '/api' ;

/**
 * Expose Service whit methods
 */
export const AuthService: Service = {
  /**
   * Api call to create new user
   * @param payload :ICreateValues
   * @returns Promise<AxiosResponse>
   */
  create: async (payload: ICreateValues) => {
    return await restClient.post(`${apiBasePath}/users`, payload);
  },
  /**
   * Api call to login user created
   * @param payload :ILoginValues
   * @returns Promise<AxiosResponse>
   */
  login: async(payload: ILoginValues): Promise<AxiosResponse> => {
    return await restClient.post(`${apiBasePath}/auth`, payload);
  },
  /**
   * Get user
   * @param payload
   * @returns Promise<AxiosResponse>
   */
  getUser: async(): Promise<AxiosResponse> => {
    return await restClient.get(`${apiBasePath}/auth`);
  }
};

