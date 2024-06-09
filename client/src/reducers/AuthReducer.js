// Import action types for authentication
import { LOGIN_USER, LOG_OUT, UPDATE_PROFILE } from "../actions/actions.auth";

// AuthReducer function to handle state changes based on dispatched actions
const AuthReducer = (state, action) => {
  switch (action.type) {
    // Handle login action
    case LOGIN_USER:
      return {
        ...state, // Spread the current state
        user: action.payload, // Set the user data from the action payload
        isAuthenticated: true, // Mark user as authenticated
        isAuthenticating: false, // Mark authentication process as complete
      };

    // Handle profile update action
    case UPDATE_PROFILE:
      return {
        ...state, // Spread the current state
        user: { ...state.user, ...action.payload }, // Update the user data with new details from the action payload
      };

    // Handle logout action
    case LOG_OUT:
      return {
        ...state, // Spread the current state
        user: {}, // Clear the user data
        isAuthenticated: false, // Mark user as not authenticated
        isAuthenticating: false, // Mark authentication process as complete
      };

    // Default case to return current state if action type does not match
    default:
      return state;
  }
};

// Export the AuthReducer as the default export
export default AuthReducer;
