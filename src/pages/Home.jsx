import React from 'react'
import SideBar from '../components/SideBar'
import MessageComponent from '../components/MessageComponent'
import { useAuthContext } from '../context/AuthContext'

const Home = () => {
  const {authUser}  =useAuthContext()
  console.log(authUser,'usersss')
  return (
    <div className='flex  overflow-hidden '>
     <div>
      <SideBar />
      
    </div>
    <div className='w-full overflow-hidden '>
      <MessageComponent/>
    </div>
    </div>
   
  )
}

export default Home
