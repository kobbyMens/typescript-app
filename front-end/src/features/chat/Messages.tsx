import React from 'react'
import { MessagesContainer} from './styledComponents'
import { Message } from  './ChatContainer'

interface MessagesType {
  messages: Message[];
  
}

function Messages({messages}: MessagesType,) {

  return (
      
      <MessagesContainer>
        <div className='messages'>
        {
          messages.map((message, index) => {
            return (
                <div key= {index} className={`message ${message.fromSelf ? "sender": "receiver"}`}>
                  <div className="content">
                    <p>
                      {message.message}
                    </p>
                  </div>
                </div>
              
            )
          }) 
        }
        </div>
        
    </MessagesContainer>
    
  )
}

export default Messages