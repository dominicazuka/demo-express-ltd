import React, { useState, useEffect} from 'react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add scroll event listener to show/hide button
    window.addEventListener('scroll', toggleVisibility)

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Function to scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button className={`back-to-top-button shadow ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
          <i class='bi bi-arrow-up-circle'></i>
        </button>
      )}
    </>
  )
}

export default BackToTopButton;
