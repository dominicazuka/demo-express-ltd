import Axios from "../../config";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TokenService from '../../libs/token'; 
import { useAuthContext } from "../../contexts/AuthContext";
  
  export const checkAuthUser = () => {
    if (localStorage.getItem("_d_user")) {
      const user = localStorage.getItem("_d_user");
      if (!user) return null;
      return JSON.parse(user);
    }
    return null;
  };

  export const useAuthRedirect = () => {
    const navigate = useNavigate();
    const {
      authState: { isAuthenticated, isAuthenticating, user }
    } = useAuthContext();
  
    useEffect(() => {
      if (isAuthenticated && !isAuthenticating) {
        const storedUser = TokenService.getUser();
  
        if (!storedUser) {
          TokenService.setUser(user);
        }
  
        // Logic to prevent logged-in users from accessing the login pages
        if (window.location.pathname === '/login/user' || window.location.pathname === '/login/driver') {
          navigate('/');
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: toast => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: 'warning',
            title: 'User Signed in already'
          });
        }
  
        // Logic to prevent users with role "User" from accessing the registration pages
        if (window.location.pathname === '/register/user' && user.role === 'User' || window.location.pathname === '/register/driver' && user.role === 'User') {
          navigate('/');
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: toast => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: 'error',
            title: 'You do not have access to this resource'
          });
        }
      }
    }, [isAuthenticated, isAuthenticating, user, navigate]);
  };