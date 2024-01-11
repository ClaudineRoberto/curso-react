import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

type Props = {
    children: ReactNode;
}

export const Container = ({children}: Props) => {
    const themeCtx = useTheme();

    return(
        <div className={`w-full h-screen
        ${themeCtx?.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
        `}>

            <div className="container mx-auto">
                {children}   
            </div>
            
        </div>
    );
}