import { useContext } from "react"
import { CountContext } from "../contexts/CountContext";

export const OnlineUsers = () => {

    const countCtx = useContext(CountContext);

    const handleBan = () => {
        countCtx?.setOnlineCount(0);
    };

    const handleAdd = () => {
        countCtx?.setOnlineCount(countCtx?.onlineCount + 1);
    };

    const handleToRemove = () => {
        countCtx?.setOnlineCount(countCtx?.onlineCount - 1);
    };

    return (
        <>
            <p>Online: {countCtx?.onlineCount}</p>
            <button onClick={handleBan} className="bg-blue-600 py-3 px-2 rounded-md mr-3">Zerar</button>
            <button onClick={handleAdd} className="bg-blue-600 py-3 px-2 rounded-md mr-3">Add</button>
            <button onClick={handleToRemove} className="bg-blue-600 py-3 px-2 rounded-md">Remover</button>
        </>
    );
};