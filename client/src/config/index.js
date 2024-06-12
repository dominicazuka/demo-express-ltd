import axios from 'axios';
import TokenService from '../libs/token';

// Determine if the current hostname indicates a local development environment
export const isLocalHost = Boolean(
  window.location.hostname === "localhost" || 
  window.location.hostname === "[::1]" || 
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

// Set the server URL based on whether the environment is local or production
const SERVER_URL = isLocalHost ? 'http://localhost:5001' : 'https://api.demoexpressltd.com';

// Set the app URL based on whether the environment is local or production
export const APP_URL = isLocalHost ? 'http://localhost:3000/' : 'https://demoexpressltd.com';

// Create an Axios instance with a base URL and default headers
const Axios = axios.create({ 
    baseURL:  `${SERVER_URL}/api`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

// Request interceptor to add the access token to the headers of outgoing requests
Axios.interceptors.request.use(
  (config) => {
     // Retrieve the access token from local storage
    const token = TokenService.getLocalAccessToken();
    console.log("Request Token:", token); // Debugging: Log the token being sent

    if (token) {
      // Add token to request headers if available
      config.headers["x-access-token"] = token; // for Node.js Express back-end
    }

    // Dynamically set Content-Type header based on request data type
    if (config.data && config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh logic
Axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    // If the request is not for login and the response status is 401 (Unauthorized)
    if (originalConfig.url !== "/users/login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          // Attempt to refresh the token
          const rs = await Axios.post("/users/refresh/token", {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          // Log the new tokens received after refresh
          console.log('New Access Token:', rs.data.accessToken);
          console.log('New Refresh Token:', rs.data.refreshToken);
          
          // Update the session with the new token
          TokenService.updateLocalSession(rs.data);
          console.log("New Tokens:", rs.data); // Debugging: Log the new tokens

          // Retry the original request with new access token
          originalConfig.headers["x-access-token"] = rs.data.accessToken;

          return Axios(originalConfig);
        } catch (_error) {
          console.error("Token Refresh Error:", _error); // Debugging: Log any errors during token refresh
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

 

export default Axios;
