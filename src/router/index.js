import React from 'react'
import {Routes,Route} from 'react-router-dom'
import routerList from './router_list'

function IndexRoute() {
  return (
    <Routes>
      {
        routerList.map((item,index) => {
          return <Route path={item.path} exect={item.exect} element={item.element} key={index} />
        })
      }
    </Routes>
  )
}

export default IndexRoute