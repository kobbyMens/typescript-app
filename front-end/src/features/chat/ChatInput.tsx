import React, {useState} from 'react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import { ChatInputContainer } from './styledComponents';

interface SendMessage {
    handleSendMessage: (msg: string) => void;
}

function ChatInput({handleSendMessage}: SendMessage) {
    
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("")

    const hideOrShowEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker)
    }

    const handleEmojiSelect = (emoji: EmojiClickData, event: MouseEvent) => {
    
        let message = msg ;
        message += emoji.emoji;
        setMsg(message)
    }

    const sendText = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (msg.length > 0) {
            handleSendMessage(msg);
            setMsg('')
        }
    }
  return (
    <ChatInputContainer>
        <div className="button-container">
            <div className="emoji">
                <SentimentSatisfiedAltIcon onClick= {hideOrShowEmojiPicker} />
                { showEmojiPicker && <EmojiPicker height={400} onEmojiClick = {handleEmojiSelect} />}
            </div>
        </div>
        <form className="input-container" onSubmit={sendText}>
            <input type="text" placeholder='Enter text message' value={msg} onChange= {(e)=> setMsg(e.target.value)} />
            <button type="submit">
                <SendIcon />
            </button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput