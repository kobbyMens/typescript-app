import React from "react"
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import { Container, StyledButton } from "./styledComponents";
import { Buffer } from "buffer";
import 'react-toastify/dist/ReactToastify.css';
import ProgressSpinner from "./ProgressSpinner";
import { SET_AVATAR_ROUTE } from "../../util/apiroutes";


function SetAvatar() {
    const api = 'https://api.multiavatar.com/41245820'
    const navigate = useNavigate()
    
    const [avatars, setAvatars] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

    const toastOptions = {
        position: toast.POSITION.BOTTOM_RIGHT,
        pauseOnHover: true,
        autoclose: 7000,
      }
    
    useEffect(() => {
        const getAvatar = async () => {
            const data = []
            for (let i = 0; i < 3; i++) {
            const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)
            const buffer = new Buffer(image.data)
            data.push(buffer.toString("base64"))
        } 
        setAvatars(data);
        setIsLoading(false);
        }
        getAvatar()
    }, [])

    const setProfileImage = async () => {
        if(selectedAvatar === null) {
            toast.error("Please select an avatar", toastOptions)
        } else {
            const user = await JSON.parse(localStorage.getItem("link-up-user") || '{}')

            const {data} = await axios.post(`${SET_AVATAR_ROUTE}/${user._id}`, {
                image: avatars[selectedAvatar],
            });

            if(data.isSet) {
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem("link-up-user", JSON.stringify(user));
                navigate("/chat")
            } else {
                toast.error("Unable to set avatar, TRY AGAIN", toastOptions);
            }
        }
        
     }
    return(
        <>
        {isLoading ? (

            <Container>
                <ProgressSpinner />
            </Container>
        ) :         
        (
            <Container>
                <div className="title-container">
                    <h1>Select an avatar for your profile Image</h1>
                </div>
                <div className="avatars">
                    { avatars.map((avatar, index)=> {
                        return (
                            <div
                                key={index}
                                className= {`avatar ${selectedAvatar === index ? "selected": ""}`}
                            >
                                <img 
                                    src= {`data:image/svg+xml;base64,${avatar}`} 
                                    alt = "avatar"
                                    onClick={() => setSelectedAvatar(index)}
                                />
                            </div>
                        )
                    })
                    }
                </div>
                <StyledButton onClick={setProfileImage}>Use this as profile image</StyledButton>
                <ToastContainer />
            </Container>
        )}
            
            
        </>
    )
}

export default SetAvatar