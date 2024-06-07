class TokenService {
    // Get the refresh token stored in local storage
    getLocalRefreshToken() {
      const user = JSON.parse(localStorage.getItem("_d_user"));
      return user?.refreshToken;
    }
  
    // Get the access token stored in local storage
    getLocalAccessToken() {
      const user = JSON.parse(localStorage.getItem("_d_user"));
      return user?.accessToken;
    }
  
    // Update the local session with user data
    updateLocalSession(user) {
      localStorage.setItem("_d_user", JSON.stringify(user));
    }
  
    // Get the user data stored in local storage
    getUser() {
      return JSON.parse(localStorage.getItem("_d_user"));
    }
  
    // Set the user data in local storage
    setUser(user) {
      localStorage.setItem("_d_user", JSON.stringify(user));
    }
  
    // Remove user data from local storage
    removeUser() {
      localStorage.removeItem("_d_user");
    }
  }
  
  export default new TokenService();  