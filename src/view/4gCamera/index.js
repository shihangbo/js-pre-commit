import React from 'react'
import {useLocation, useParams} from 'react-router-dom'

function IVGCamera() {
  const location = useLocation()
  const params = useParams()
  console.log(this, location, params)
  return (
    <div className="App">
      IVGCamera
    </div>
  )
}
export default IVGCamera