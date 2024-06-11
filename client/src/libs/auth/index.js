import Axios from '../../config'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import TokenService from '../../libs/token'
import { useAuthContext } from '../../contexts/AuthContext'

// Check if user data exists in local storage
export const checkAuthUser = () => {
  if (localStorage.getItem('_d_user')) {
    const user = localStorage.getItem('_d_user')
    if (!user) return null
    return JSON.parse(user)
  }
  return null
}

// custom hook is responsible for checking the user's authentication status and role and handle redirection to home page from login (already logged in users) and registration (users with certain 'role' can't access the registration) pages.
export const useAuthRedirect = () => {
  const navigate = useNavigate()
  const {
    authState: { isAuthenticated, isAuthenticating, user }
  } = useAuthContext()

  useEffect(() => {
    if (isAuthenticated && !isAuthenticating) {
      const storedUser = TokenService.getUser()

      if (!storedUser) {
        TokenService.setUser(user)
      }

      // Logic to prevent logged-in users from accessing the login pages
      if (
        window.location.pathname === '/login/user' ||
        window.location.pathname === '/login/driver'
      ) {
        navigate('/')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          }
        })
        Toast.fire({
          icon: 'warning',
          title: 'User Signed in already'
        })
      }

      // Logic to prevent users with role "User" from accessing the registration pages
      if (
        (window.location.pathname === '/register/user' &&
          user.role === 'User') ||
        (window.location.pathname === '/register/driver' &&
          user.role === 'User')
      ) {
        navigate('/')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          }
        })
        Toast.fire({
          icon: 'error',
          title: 'You do not have access to this resource'
        })
      }
    }
  }, [isAuthenticated, isAuthenticating, user, navigate]) //dependencies
}

// Custom hook to handle auto logout when the token expires
export const useAutoLogout = () => {
  const navigate = useNavigate()
  // Destructure the authState object from the useAuthContext hook to extract isAuthenticated and isAuthenticating
  const {
    authState: { isAuthenticated, isAuthenticating, user }, //Destructures the authState object to extract isAuthenticated and isAuthenticating values.
    authDispatch // Destructure authDispatch from useAuthContext hook
  } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function

  useEffect(() => {
    const interval = setInterval(() => {
      const expiryTime = user.accessTokenExpiry * 1000 // Convert seconds to milliseconds

      // Check if the expiry time has passed and the user is authenticated
      if (new Date().getTime() > expiryTime) {
        handleLogout()
      }
    }, 1000) // Check every second

    return () => clearInterval(interval) // Clean up interval on component unmount
  }, [authDispatch, navigate, user.accessTokenExpiry]) // Dependencies for useEffect

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Check if user data exists in local storage
      if (localStorage.getItem('_d_user')) {
        const user = localStorage.getItem('_d_user')

        // Parse user data if it exists
        if (!user) return null
        const _user = JSON.parse(user)
        // Send a patch request to logout the user
        await Axios.patch('/users/logout', { refreshToken: _user.refreshToken })
      }

      // Remove user data from local storage
      TokenService.removeUser()

      // Dispatch logout action
      authDispatch({ type: 'LOG_OUT' })

      // Display logout message
      Swal.fire({
        icon: 'warning',
        title: 'Session expired',
        text: 'Your session has expired. Please log in again.',
        showConfirmButton: true,
        confirmButtonColor: '#006400'
      }).then(() => {
        // Redirect to the login page
        navigate('/login/user')
      })
    } catch (error) {
      console.log('Auto logout error', error)
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'An error occurred during auto-logout',
        showConfirmButton: true,
        confirmButtonColor: '#006400'
      })
    }
  }
}
