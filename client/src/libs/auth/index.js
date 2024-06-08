import Axios from "../../config";

export const logout = async (navigate) => {
    try {
      if (localStorage.getItem("_f_user")) {
        const user = localStorage.getItem("_d_user");
  
        if (!user) return null;
        const _user = JSON.parse(user);
        await Axios.patch("/users/logout", { refreshToken: _user.refreshToken });
      }
      localStorage.removeItem("_d_user");

    //   window.location.href = "/";
      navigate('/'); // Redirect to home page
    } catch (error) {
        console.log("Logout error", error);
    }
  };
  
  export const checkAuthUser = () => {
    if (localStorage.getItem("_d_user")) {
      const user = localStorage.getItem("_d_user");
      if (!user) return null;
      return JSON.parse(user);
    }
    return null;
  };