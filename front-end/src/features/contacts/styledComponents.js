import styled from 'styled-components'
import { colors } from '../signup/styledComponents'

export const ContactContainer = styled.div`
/* display: grid;
grid-template-rows: 10% 75% 15%;
*/
flex: 0 0 30%;
display: flex;
border-right: 0.2rem solid ${colors.ashColor};
flex-direction: column;
justify-content: space-between;
overflow: hidden;
max-width: 30%;
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0; 
        align-items: center;
        
        border-bottom: 0.2rem solid ${colors.ashColor} ;
        img {
            height: 3rem;
            margin-right: 0.5rem;
        }
        h3 {
            font-style: italic
        }
    }

    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        flex-grow: 1;
        &::-webkit-scrollbar {
            width: 0.3rem;
            
            &-thumb {
                background-color: ${colors.deepAsh};
                width: 0.1rem;
                border-radius: 1rem;
            }
        }
        .contact {
            width: 100%;
            display: flex;
            transition: 0.2s ease-in-out;
            align-items: center;
            cursor: pointer;
            
            .avatar {
                padding: 0.5rem;

                img {
                    height: 3rem;
                }     
            }
            .username {
               height: 100%;
               display: flex;
               flex-direction: column;
               justify-content: center; 
               border-bottom: 0.2rem solid ${colors.ashColor};
               flex-grow: 2;
            
                p {
                    font-size: 0.9rem;
                }
            }
        }

        .selected {
            background-color: ${colors.deepAsh};
            .username {
                border-bottom: 0.01rem solid ${colors.deepAsh};
            }
        }
        
    }
    .current-user {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .avatar {
            margin: 0 0.6rem;

            img {
                height: 3.5rem;
                max-inline-size: 100%;
            }
        }
    }
        @media screen and (min-width: 720px) and (max-width: 1080px) {
            .username {
                h2 {
                    font-size: 1rem
                }    
            }   
        }

`

