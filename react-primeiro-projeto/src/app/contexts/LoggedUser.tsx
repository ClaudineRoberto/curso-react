import { createContext, useState } from "react";

type LoggedUserContextType = {
    name: string;
    setName: (name: string) => void;
};

type Props = {
    children: React.ReactNode;
};


export const LoggedUserContext = createContext<LoggedUserContextType | null>(null);

export const LoggedUserProvider = ({ children }: Props) => {
    const [name, setName] = useState('Claudine');
    return (
        <LoggedUserContext.Provider value={{ name, setName }}>
            {children}
        </LoggedUserContext.Provider>
    );
}
