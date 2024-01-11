import { useChat } from "../contexts/ChatContext";
import { useUser } from "../contexts/UserContext";

export const ChatMessages = () => {

    

    const chatCtx = useChat();
    const userCtx = useUser();

    return (
        <div className="flex flex-col">
            {chatCtx?.chat.map((message, index) => {
                const isUser = message.user === userCtx?.user;
                return (
                    <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
                        <div className={`rounded-md p-2 ${isUser ? 'bg-green-500' : 'bg-blue-500'}`}>
                            <span className="text-xs text-white">{message.user}</span>
                            <p className="text-sm text-white">{message.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}