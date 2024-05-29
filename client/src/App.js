import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JavaScript
import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import BackToTopButton from './components/BackToTopButton'
import FrontEndHeader from '../src/components/FrontEndHeader'
import FrontEndFooter from '../src/components/FrontEndFooter'
import FullScreenLoader from './components/FullScreenLoader'
import Swal from 'sweetalert2'

//using lazy load
const HomeScreen = lazy(() => import('./views/frontend/HomeScreen'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))
const AboutUs = lazy(() => import('./views/frontend/AboutUs'))
const Faq = lazy(() => import('./views/frontend/Faq'))

function App () {
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
        <BrowserRouter>
          <FrontEndHeader />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/faq' element={<Faq />} />

            <Route path='/404' element={<ErrorPage />} />

            {/* Catch-all route for unmatched paths, you can either use a 404 page or so */}
            <Route path='*' element={<Navigate to='/404' replace />} />
          </Routes>
          <FrontEndFooter />
        </BrowserRouter>
        <BackToTopButton />
      </Suspense>
    </div>
  )
}

export default App
