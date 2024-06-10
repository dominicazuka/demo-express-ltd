import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JavaScript
import React, { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BackToTopButton from './components/BackToTopButton'
import BackEndLayout from '../src/layouts/BackEndLayout'
import FrontEndLayout from '../src/layouts/FrontEndLayout'
import FullScreenLoader from './components/FullScreenLoader'
import Swal from 'sweetalert2'
import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-select'
import 'datatables.net-select-bs5'
import { useAuthContext } from '../src/contexts/AuthContext'
import ProtectedRoute from './layouts/ProtectedRoute.js'

//using lazy load
const HomeScreen = lazy(() => import('./views/frontend/HomeScreen'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))
const UnauthorizedPage = lazy(() => import('./components/UnauthorizedPage'))
const AboutUs = lazy(() => import('./views/frontend/about/AboutUs'))
const Faq = lazy(() => import('./views/frontend/faq/Faq'))
const Ship = lazy(() => import('./views/frontend/ship/Ship'))
const RegisterPageUser = lazy(() => import('./views/auth/RegisterPageUser'))
const VerifyEmail = lazy(() => import('./views/auth/VerifyEmail'))
const RegisterPageDriver = lazy(() => import('./views/auth/RegisterPageDriver'))
const LoginPageUser = lazy(() => import('./views/auth/LoginPageUser'))
const LoginPageDriver = lazy(() => import('./views/auth/LoginPageDriver'))
const MyOrders = lazy(() => import('./views/frontend/order/MyOrders'))
const OrderDetails = lazy(() => import('./views/frontend/order/OrderDetails'))
const MyAccount = lazy(() => import('./views/frontend/account/MyAccount'))
const TrackMyOrder = lazy(() => import('./views/frontend/track/TrackMyOrder'))
const ServiceNews = lazy(() =>
  import('./views/frontend/service-news/ServiceNews')
)
const ContactUs = lazy(() => import('./views/frontend/contact/ContactUs'))
const Locations = lazy(() => import('./views/frontend/locations/Locations'))
const LocationWithinCountry = lazy(() =>
  import('./views/frontend/locations/LocationWithinCountry')
)
const ReportFraud = lazy(() =>
  import('./views/frontend/trust-center/ReportFraud')
)
const ConditionsOfCarriage = lazy(() =>
  import('./views/frontend/conditions-of-carriage/ConditionsOfCarriage')
)

// backend
const Dashboard = lazy(() => import('./views/backend/Dashboard.js'))

const App = () => {
  // Destructure the authState object from the useAuthContext hook to extract isAuthenticated and isAuthenticating
  const {
    authState: { isAuthenticated, isAuthenticating } //Destructures the authState object to extract isAuthenticated and isAuthenticating values.
    // authDispatch // Destructure authDispatch from useAuthContext hook
  } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function

  useEffect(() => {
    //set localStorage value
    const hasConsent = localStorage.getItem('cookieConsent')
    // Simulate some delay to show the loader
    if (!hasConsent) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        showConsentModal()
        // Finish loading, hide loader
      }, 3000) // Adjust the duration as needed

      return () => clearTimeout(timeout)
    }
  }, [])

  const showConsentModal = () => {
    Swal.fire({
      position: 'bottom',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      title: 'Cookie Disclaimer',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      confirmButtonColor: '#006400',
      denyButtonText: `Don't save`,
      html: `
        <div role="alertdialog" aria-describedby="onetrust-policy-text" aria-modal="true" aria-label="Privacy" style="display: flex; align-items: center; justify-content: center; height: 100%;">
          <div class="ot-sdk-container" style="width: 80%; max-width: 800px;">
            <div class="ot-sdk-row">
              <div id="onetrust-group-container" class="ot-sdk-eight ot-sdk-columns">
                <div class="banner_logo"></div>
                <div id="onetrust-policy" style="color: white;">
                  <div id="onetrust-policy-text">
                    This website uses cookies and similar technologies, (hereafter “technologies”), which enable us, for example, to determine how frequently our internet pages are visited, the number of visitors, to configure our offers for maximum convenience and efficiency and to support our marketing efforts. These technologies incorporate data transfers to third-party providers based in countries without an adequate level of data protection (e. g. United States). For further information, including the processing of data by third-party providers and the possibility of revoking your consent at any time, please see your settings under “Consent Preferences” and our
                    <a class="ot-cookie-policy-link" href="#" target="_blank" aria-label="Privacy notice, opens in a new tab" style="color: white;">Privacy notice</a>
                    <a class="ot-imprint-link" href="#" target="_blank" aria-label="Legal Notice, opens in a new tab" style="color: white;">Legal Notice</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.setItem('cookieConsent', true)
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <div className='App'>
      <Suspense fallback={<FullScreenLoader />}>
        <Routes>
          {/* frontend */}
          <Route element={<FrontEndLayout />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/ship' element={<Ship />} />
            <Route path='/register/user' element={<RegisterPageUser />} />
            <Route path='/user/verify-email' element={<VerifyEmail />} />
            <Route path='/login/user' element={<LoginPageUser />} />
            <Route path='/login/driver' element={<LoginPageDriver />} />
            <Route path='/register/driver' element={<RegisterPageDriver />} />
            <Route path='/track-order' element={<TrackMyOrder />} />
            <Route path='/service-news' element={<ServiceNews />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/locations' element={<Locations />} />
            <Route
              path='/location-within-country'
              element={<LocationWithinCountry />}
            />
            <Route path='/report-fraud' element={<ReportFraud />} />
            <Route
              path='/conditions-of-carriage'
              element={<ConditionsOfCarriage />}
            />

            {/* protected routes frontend */}
            <Route element={<ProtectedRoute allowedRoles={['User', 'Admin', 'SuperAdmin']} />}>
              <Route path='/account' element={<MyAccount />} />
              <Route path='/my-orders' element={<MyOrders />} />
              <Route path='/order-details' element={<OrderDetails />} />
            </Route>
          </Route>

          {/* backend */}
          <Route element={<BackEndLayout />}>
            {/* protected routes backend */}
            <Route
              element={
                <ProtectedRoute allowedRoles={['Admin', 'SuperAdmin']} />
              }
            >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Route>

          {/* 404 page */}
          <Route path='/404' element={<ErrorPage />} />

          {/* unauthorized */}
          <Route element={<FrontEndLayout />}>
            <Route path='/unauthorized' element={<UnauthorizedPage />} />
          </Route>

          {/* Catch-all route for unmatched paths, you can either use a 404 page or so */}
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
        <BackToTopButton />
      </Suspense>
    </div>
  )
}

export default App
