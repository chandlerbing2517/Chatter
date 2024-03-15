import React from 'react'
import appLayout from '../components/layout/appLayout'

const Chats = () => {
  return (   <div>
      Chats
    </div>
 
  )
}

const EnhancedChats = appLayout()(Chats);
export default EnhancedChats;
