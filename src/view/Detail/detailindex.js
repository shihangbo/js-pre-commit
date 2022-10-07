import React from 'react'
import {useLocation, useParams} from 'react-router-dom'

function Index() {
  const location = useLocation()
  const params = useParams()
  console.log(this, location, params)
  return (
    <div className="App">
      帮助详情
    </div>
  )
}
export default Index