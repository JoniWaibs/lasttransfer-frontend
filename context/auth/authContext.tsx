import * as React from 'react';
import { AuthState } from '../../Types/Auth';

/**
 * Global Context for app
 */
export const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
  user: {
    email: '',
    exp: 0,
    iat: 0,
    name: '',
    uid: '',
  },
  message: '',
  statusCode: 0,
  loginUser: () => {},
  createUser: () => {},
  getUserAuthenticated: () => {},
};

/**
 * expose app Context
 */
export const AuthContext = React.createContext<AuthState>(initialState);





