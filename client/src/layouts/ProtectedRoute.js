import { Navigate, Outlet } from 'react-router-dom'
import FullScreenLoader from '../components/FullScreenLoader'
import { useAuthContext } from '../contexts/AuthContext'
import Swal from 'sweetalert2'


const ProtectedRoute = ({ allowedRoles }) => {
  // Destructure the authState object from the useAuthContext hook to extract isAuthenticated and isAuthenticating
  const {
    authState: { isAuthenticated, isAuthenticating, user }, //Destructures the authState object to extract isAuthenticated and isAuthenticating values.
  } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function

  //if user auth status is still being determined
  if (isAuthenticating) {
    return <FullScreenLoader />
  }

  //   if the user is not authenticated
  if (!isAuthenticated) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
      }
    })
    Toast.fire({
      icon: 'warning',
      title: 'Log in to enjoy full account features!'
    })
    return <Navigate to="/login/user" />
  }

  ///if the user is authenticated but does not have the required role
  if(allowedRoles && !allowedRoles.includes(user.role)){
    return <Navigate to="/unauthorized" />
  }

  // If user is not authenticated, pass the current location and redirect to homepage
  return (
    <>
      <main>
        <Outlet />{/* This renders the matched child routes */}
      </main>
    </>
  );
}

export default ProtectedRoute;
