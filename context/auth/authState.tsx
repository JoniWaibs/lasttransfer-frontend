import * as React from 'react';
import Router from 'next/router'
import { handlerAuthToken } from "../../config";
import { AuthService } from '../../services';
import { ICreateValues, ILoginValues } from '../../Types/Form';
import { AuthContext, initialState } from './authContext';
import { authReducer } from './authReducer';
import {
  USER_AUTHENTICATED,
  USER_CREATED_SUCCESSFULLY,
  USER_CREATED_ERROR,
  USER_LOGIN_SUCCESSFULLY,
  USER_LOGIN_ERROR,
  RESET_ALERT
}  from './types'

interface IAppContextProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Expose Global application state
 * @param  children :JSX.Element
 * @returns Global State
 */
const AppContext: React.FunctionComponent<IAppContextProps> = ({children}) => {

  const [ state , dispatch ] = React.useReducer(authReducer, initialState)
  const { token, isAuthenticated, user, message, statusCode } = state;

  /**
   * Clear DOM alerts
   */
  const clearDOMAlerts = () => {
    setTimeout(() => dispatch({type: RESET_ALERT, payload: {}}), 3000);
  }
  /**
   * Api call to create a new user
   * @param payload :ICreateValues
   */
  const createUser = async (payload: ICreateValues) => {
    try {
      const {data: {message}, status} = await AuthService.create(payload);
      dispatch({type: USER_CREATED_SUCCESSFULLY, payload: {message, status}});
    } catch (error: any) {
      const {data: {message}, status} = error.response;
      dispatch({type: USER_CREATED_ERROR, payload: {message, status}});
    }
    clearDOMAlerts();
  };
  /**
   * Api call to login user created
   * @param payload :ILoginValues
   */
  const loginUser = async (payload: ILoginValues) => {
    try {
      const {data: {message, access_token}, status} = await AuthService.login(payload);
      dispatch({type: USER_LOGIN_SUCCESSFULLY, payload: {message, access_token, status}});
    } catch (error: any) {
      const {data: {message}, status} = error.response;
      dispatch({type: USER_LOGIN_ERROR, payload: {message, status}});
    }
    clearDOMAlerts();
  };

  /**
   * Api call to get user
   */
  const getUserAuthenticated = async () => {
    const authToken = localStorage.getItem('AuthToken') ?? null;
    /**
     * Set token as header
     */
    handlerAuthToken(authToken)
    try {
      const {data: {user}, status}  = await AuthService.getUser();
      dispatch({type: USER_AUTHENTICATED, payload: {user, status}});
    } catch (error: any) {
      const {data: {message}, status} = error.response;
      dispatch({type: USER_LOGIN_ERROR, payload: {message, status}});
    };
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        user,
        message,
        statusCode,
        loginUser,
        createUser,
        getUserAuthenticated,
      }}>
      { children }
    </AuthContext.Provider>
  );
};

export default AppContext;
