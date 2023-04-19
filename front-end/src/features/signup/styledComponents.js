import styled from 'styled-components'

export const colors = {
    primary: '#FFFFFF',
    containerBackgroundColor: '#ECECEC',
    primaryBackgroundColor: '#50C878',
    secondaryFontColor: '#FFA500',
    ashColor: '#E0E0E0',
    deepAsh: '#A4A4A4',
    lightBlue: '#87C1FF'
}
export const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    
        .brand { 
            display: flex;
            align-itemns: center;
            gap: 1rem;
            justify-content: center;

            img {
                height: 5rem;
            }
            h1 {
                font-style: italic
            }
        }

`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${colors.containerBackgroundColor};
    border-radius: 2rem;
    padding: 3rem 5rem;
    box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, .2), 0 1rem 0.8rem rgba(0, 0, 0, .1); 
    input {
        background-color: transparent;
        padding: 1rem;
        font-size: 1rem;
        border: 0.1rem solid #D3D3D3;
        outline: none;
        border-radius: 0.4rem;
        width: 100%;

        &:focus {
            border: 0.15rem solid #BEBEBE;
        }
    }

    button {
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        color: ${colors.primary};
        background-color: ${colors.primaryBackgroundColor};
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 0.3rem;
        transition: 0.5s ease-in-out;

        &:hover {
            background-color: #319B54;
        }
    }

    span {

       a {
        color: ${colors.secondaryFontColor};
        font-weight: bold;
        transition: 0.2s ease-in-out;
        &:hover {
            font-size: 1.1rem;
        }
       }
    }
`;