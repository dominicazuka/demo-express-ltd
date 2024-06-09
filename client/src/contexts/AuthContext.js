// Import necessary modules from React and other files
import React, { createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";
import { checkAuthUser } from "../libs/auth";

// Initial state for authentication context
const initialState = {
  isAuthenticated: false, // Indicates if the user is authenticated
  isAuthenticating: true, // Indicates if the authentication check is in progress
  user: {}, // Object to store user details
};

// Create a context for authentication
export const AuthContext = createContext();

// AuthProvider component to provide authentication state and dispatcher to its children
const AuthProvider = (props) => {
  // Use useReducer hook to manage authentication state with an initial state
  const [authState, authDispatch] = useReducer(
    AuthReducer, // Reducer function to handle state changes
    initialState, // Initial state
    () => {
      // Initialize state based on authentication status
      const authUser = checkAuthUser(); // Check if the user is authenticated
      if (authUser === null) {
        return {
          ...initialState,
          isAuthenticated: false,
          isAuthenticating: false,
        };
      }
      return {
        ...initialState,
        isAuthenticated: true,
        isAuthenticating: false,
        user: authUser
      };
    }
  );

  // Return the context provider with the current state and dispatcher
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Custom hook to use authentication context
export const useAuthContext = () => useContext(AuthContext);
