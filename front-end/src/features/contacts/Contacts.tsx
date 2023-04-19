import React, { useEffect } from 'react'
import { useState } from 'react';
import {User} from '../chat/Chat'
import logo from '../../assets/Logo.png'
import { ContactContainer } from './styledComponents';

interface UserContacts {
    contacts: User[];
    currentUser: User;
    changeChat: (chat: User) => void;
}
function Contacts({contacts, currentUser, changeChat}: UserContacts) {

    const [currentUserName, setCurrentUserName] = useState<any>(null)
    const [currentUserImage, setCurrentUserImage] = useState<any>(null)
    const [currentUserSelected, setCurrentUserSelected] = useState<number>(null!)

    useEffect(() => {
        if (currentUser) {
            setCurrentUserName(currentUser.username)
            setCurrentUserImage(currentUser.avatarImage)   
        }
    }, [currentUser])

    const changeCurrentChat = (index: number, contact: User) => {
        setCurrentUserSelected(index)
        changeChat(contact)
    }
  return (
    <>
        {currentUserImage && currentUserName && (
            <ContactContainer>
                <header className="brand">
                    <img src={logo} alt='Logo' />
                    <h3>LinkUp</h3>
                </header>
                <div className='contacts'>
                    { contacts.map((contact, index) => {
                        return (
                            <div 
                                className={`contact ${index === currentUserSelected ? "selected":  ""}`}
                                key= {index}
                                onClick= {()=> changeCurrentChat(index, contact)}
                            >
                                <div className="avatar">
                                    <img 
                                        src={`data:image/svg+xml;base64,${contact.avatarImage}`} 
                                        alt='avatar'
                                    />
                                </div>
                                <div className="username">
                                    <h3>{contact.username}</h3>
                                    <p>Last message received</p>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
                <footer className="current-user">
                    <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar"/>
                    </div>
                    <div className="username">
                        <h2>{currentUserName}</h2>
                    </div>
                </footer>
            </ContactContainer>
        )}
    </>
  )
}

export default Contacts