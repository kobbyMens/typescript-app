import React from 'react'
import { User } from './Chat'
import { WelcomeContainer } from './styledComponents';
export interface CurrentUser  {
    currentUser: User;
}
function Welcome( {currentUser} : CurrentUser) {
  return (
  <WelcomeContainer>
    <h1>
        <span>{currentUser.username}</span> Welcome to LinkUp!
    </h1>
    <h3>Select a user to chat with.</h3>
  </WelcomeContainer>
    
  )
}

export default Welcome