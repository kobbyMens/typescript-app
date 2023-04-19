import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {User} from './Chat'
import {StyledMessagesContainer} from "./styledComponents"
import ChatInput from './ChatInput'
import Logout from '../logout/Logout'
import Messages from './Messages'
import { STORE_MESSAGE_ROUTE } from '../../util/apiroutes'
import { GET_CURRENT_USERS_MESSAGES } from '../../util/apiroutes'
interface CurrentChat {
  currentChat: User;
  currentUser: User;
  socket: any;
}

export interface Message {
  fromSelf: boolean;
  message: string;
}
function ChatContainer({currentChat, currentUser, socket}: CurrentChat) {
  
  const [messages, setMessages] = useState<Message[]>([])
  const [arrivalMessage, setArrivalMessage ] = useState<Message | null>(null)
  const scrollRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (currentChat) {
      const getAllMessages = async () => {
        const response = await axios.post(GET_CURRENT_USERS_MESSAGES, {
          from: currentUser._id,
          to: currentChat._id
        })
        setMessages(response.data)
      } 
  
      getAllMessages()
    }
    

  }, [currentChat, currentUser])

  useEffect(()=> {
    if (socket.current) {
      socket.current.on("messageRecieved", (msg: string) => {
        setArrivalMessage({fromSelf: false, message: msg})
      })
    }
  })
  useEffect(()=> {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage])

  }, [arrivalMessage])

  useEffect(()=> {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])
  const handleSendMessage = async (msg: string) => {
    await axios.post(STORE_MESSAGE_ROUTE, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg
    })
    socket.current.emit("sendMessage", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg
    });

    setMessages([...messages, {fromSelf: true, message: msg}])
  }

  
  return (
    <>
     {currentChat && (
      <StyledMessagesContainer>
      <header className="chat-header">
        <div className="user-details">
          <img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="avatar"/>
            {currentChat.username}
        
        </div>
        <Logout />
      </header>
      
      <Messages messages={messages} />
      <ChatInput handleSendMessage={handleSendMessage}/>

    </StyledMessagesContainer>
     )
    }
    </>
   
    
  )
}

export default ChatContainer