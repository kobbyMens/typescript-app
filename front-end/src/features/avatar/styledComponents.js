import styled from "styled-components"
import { colors } from "../signup/styledComponents"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    .loader {
        max-inline-size: 100%;
    }
    .avatars {
        display: flex;
        gap: 2rem;
        
        .avatar {
            border: 0.4rem solid transparent;
            padding: 0 0.4rem;
            border-radius: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s ease-in-out;
        
                img {
                    height: 6rem;
                }
        }
        .selected {
            border: 0.3rem solid ${colors.primaryBackgroundColor} 
        }
    }
`
 
export const StyledButton = styled.button`
    border: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    color: ${colors.primary};
    background-color: ${colors.primaryBackgroundColor};
    padding: 1rem 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    transition: 0.5s ease-in-out;
    &:hover {
        background-color: #319B54;
    }
`