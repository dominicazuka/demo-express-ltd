import Axios from "../../config";
  
  export const checkAuthUser = () => {
    if (localStorage.getItem("_d_user")) {
      const user = localStorage.getItem("_d_user");
      if (!user) return null;
      return JSON.parse(user);
    }
    return null;
  };