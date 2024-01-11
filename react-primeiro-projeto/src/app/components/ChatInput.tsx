import { useState } from "react";
import { useChat } from "../contexts/ChatContext";

type Props = {
    name: string;
}

export const ChatInput = ({name}: Props) => {
    const chatCtx = useChat();
    const [message, setMessage] = useState('');

    const handleKeyUpAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code.toLowerCase() === 'enter') {
            if (message.trim() !== '') {
                chatCtx?.addMessage(name, message.trim());
                setMessage('');
            }
        }
    }

    return (
        <input
        type="text"
        className="w-full bg-transparent outline-none text-white"
        placeholder={`${name}, Digite sua mensagem e aperte ENTER`}
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyUp={handleKeyUpAction}
        />
    );
}