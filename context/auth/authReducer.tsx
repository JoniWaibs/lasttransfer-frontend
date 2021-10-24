import { AuthAction, AuthState } from "../../Types/Auth";
import { 
  USER_AUTHENTICATED,
  USER_CREATED_SUCCESSFULLY,
  USER_CREATED_ERROR,
  USER_LOGIN_SUCCESSFULLY,
  USER_LOGIN_ERROR,
  RESET_ALERT
}  from './types'

/**
 * Expose Reducer Switch
 * @param state
 * @param action
 * @returns New State
 */
export function authReducer(state:AuthState , action: AuthAction){
  const {type, payload } = action;

  switch(type) {
    case RESET_ALERT:
      return {
        ...state,
        message: '',
        statusCode: 0
      }
    case USER_AUTHENTICATED:
      return {
        ...state,
        user: payload.user,
        statusCode: payload.status
      }
    case USER_CREATED_SUCCESSFULLY:
      return {
        ...state,
        message: payload.message,
        statusCode: payload.status
      }
    case USER_CREATED_ERROR:
      return {
        ...state,
        message: payload.message,
        statusCode: payload.status
      }
    case USER_LOGIN_SUCCESSFULLY:
      localStorage.setItem('AuthToken', payload.access_token);
      return {
        ...state,
        token: payload.access_token,
        message: payload.message,
        isAuthenticated: true,
        statusCode: payload.status
      }
    case USER_LOGIN_ERROR:
      return {
        ...state,
        message: payload.message,
        statusCode: payload.status
      }
    default:
      return state;
  };
}