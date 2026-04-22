import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
   <div className="min-h-screen bg-linear-to-hr from-slate-50 to-gray-100 text-gray-900">
    <Navbar/>
    <main>{ children }</main>
   </div>
  )
}

export default Layout