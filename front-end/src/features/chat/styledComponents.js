import styled from 'styled-components'
import { colors } from '../signup/styledComponents'
export const StyledButton = styled.button`

`
export const Container = styled.div`
  
   width: 90%;
   height: 100%;
   margin: 0 auto;
   gap: 1rem;
   background-color: ${colors.primary};
   overflow: hidden;
    .chat-container {
       
        width: 100%;
        background-color: ${colors.containerBackgroundColor};
        display: flex;
        border-radius: 1.5rem;
        /* display: grid;
        grid-template-columns: 25% 75%; 
        */
        @media screen and (max-width: 720px){
            grid-template-columns: 35% 65%;
            background-color: red;
        }
    }
`
export const WelcomeContainer = styled.div`
    display: flex;
    flex: 70%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        color: ${colors.secondaryFontColor}
    }
`
export const StyledMessagesContainer = styled.div`
    
    /* display: grid;
    grid-template-rows: 10% 75% 15%;
    */
    
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    .chat-header {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1.5rem; 
        .user-details {
            display: flex;
            align-items: center;
              
                img {
                    height: 3rem;
                    margin-right: 0.5rem; 
                }
            
            .username {

            }
        }
    }

    .chat-messages {

    }
`

export const MessagesContainer = styled.div`
    position: relative;
    padding: 1rem 2rem;
    display: flex;
    flex-grow: 1 1 0;
    flex-direction: column;
    background-color: red;
    overflow: auto;
    
    .messages {
        
    }
    .message {
        display: flex;
        align-items: center;

        .content {
            max-width: 40%;
            overflow-wrap: break-word;
            border-radius: 1.5rem;
            padding: 1rem;
            font-size: 1rem;
            margin: 0.3rem 0;
        }
    } 
    .sender {
        justfiy-content: flex-end;
        .content {
            background-color: ${colors.primary};
            
        }   
    }

    .receiver {
        justify-content: flex-end;
        .content {
            background-color: ${colors.primaryBackgroundColor}
        }
    }
`
export const ChatInputContainer = styled.footer`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    
    .button-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        .emoji {
            position: relative;
            svg {
                font-size: 1.5rem;
                color: ${colors.secondaryFontColor};
                cursor: pointer;
            }
            .epr-main {
                position: absolute;
                top: -400px;
            }
        }
    }

    .input-container {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        background-color: ${colors.primary};
        gap: 2rem;
        
            input {
                width: 90%;
                height: 60%;
                border: none;
                outline: none;
                background-color: transparent;
                padding-left: 1rem;
                font-size: 1.2rem;
                &::selection {
                    background-color: ${colors.lightBlue};
                }
            }
            button {
                background-color: ${colors.deepAsh};
                padding: 0.3rem 2rem; 
                border-radius: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                &:hover {
                    background-color: #b8b8b6;
                    cursor: pointer;
                }
                    svg {
                        font-size: 1.8rem;
                    }
             }

        }
    }
` 

