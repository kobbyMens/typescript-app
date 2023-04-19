import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styledComponents'
import { GET_USERS_ROUTE } from '../../util/apiroutes';
import Contacts from '../contacts/Contacts';
import Welcome from './Welcome';
import ChatContainer from './ChatContainer';
import { io } from "socket.io-client";
import {server} from "../../util/apiroutes"

export interface User {
  _id: string;
  username: string;
  email: string;
  isAvatarImageSet: boolean;
  avatarImage: string; 
}

function Chat() {

  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState<User | any>(null)
  const [currentChat, setCurrentChat] = useState<any>(null!)
  const [isLoaded, setIsLoaded] = useState(false)
  const socket = useRef<any>(null)
  useEffect(() => {
    const getAlreadyLoggedInUser = async () => {
      let data  = await JSON.parse(localStorage.getItem("link-up-user") || '{}')
      setCurrentUser(data)
      setIsLoaded(true)
    } 
    if (!localStorage.getItem("link-up-user")) {
      navigate('/')
    } else {
      getAlreadyLoggedInUser()
      
    }
  }, [navigate])

  useEffect(() => {
    if(currentUser) {
      socket.current = io(server);
      socket.current.emit("add-user", currentUser._id)
    }
  }, [currentUser])

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await axios.get(`${GET_USERS_ROUTE}/${currentUser._id}`)
      setContacts(data)
    }

    if(currentUser) {
      if (currentUser.isAvatarImageSet) {
        getAllUsers()
      } else {
        navigate('/setAvatar')
      }
    }
  }, [currentUser, navigate])

  const handleChatChange = (chat: User) => {
    setCurrentChat(chat)
  }

  return (
    <Container>
      <div className='chat-container'>
        <Contacts 
          contacts={contacts} 
          currentUser = {currentUser} 
          changeChat= {handleChatChange}
        />
        {
          isLoaded && currentChat === null ?
          (<Welcome currentUser= {currentUser} />)
          :
          (<ChatContainer currentChat= {currentChat } currentUser = {currentUser} socket={socket}/>)
        }
        
      </div>
    </Container>
  )
}

export default Chat