import React from 'react'
import SideBar from '../components/SideBar'
import MessageComponent from '../components/MessageComponent'

const Home = () => {
  return (
    <div className='flex'>
     <div>
      <SideBar />
      
    </div>
    <div className='w-full '>
      <MessageComponent/>
    </div>
    </div>
   
  )
}

export default Home
