import React from 'react'
import Index from '../view/Index/index'
import IVGCamera from '../view/4gCamera/index'
import BatteryCamera from '../view/BatteryCamera/index'
const routerList = [
  {
    name: '帮助详情',
    path: '/',
    axect: true,
    element: <Index />
  },
  {
    name: '4g球机',
    path: '/4gCamera',
    axect: true,
    element: <IVGCamera />
  },
  {
    name: '4g球机',
    path: '/4gCamera/:id',
    axect: true,
    element: <IVGCamera />
  },
  {
    name: '电池相机',
    path: '/batteryCamera',
    axect: true,
    element: <BatteryCamera />
  }
]

export default routerList