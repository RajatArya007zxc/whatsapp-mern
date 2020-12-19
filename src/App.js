import React from 'react'
import Chat from './Component/Chat'
import Sidebar from './Component/Sidebar'

export default function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat/>

      </div>
      
    </div>
  )
}
