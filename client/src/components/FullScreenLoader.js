import React from 'react'
import { BarLoader, BounceLoader } from 'react-spinners'
import { useMediaQuery } from 'react-responsive'

const Loader = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: isTabletOrMobile ? 'calc(100vh - 100px)' : '350px', // Adjust height based on screen size
        marginTop: isTabletOrMobile ? '100px' : '0', // Adjust margin top based on screen size
      }}
    >
      <BarLoader color='#36d7b7' loading={true} width={150} />
    </div>
  )
}

export default Loader
