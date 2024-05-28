import React from 'react'
import { BounceLoader } from 'react-spinners'
import { useMediaQuery } from 'react-responsive'

function Loader () {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <BounceLoader color='#36d7b7' loading={true} width={150} />
    </div>
  )
}

export default Loader
