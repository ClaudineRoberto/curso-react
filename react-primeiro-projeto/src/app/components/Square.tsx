import { useEffect } from "react";

export const Square = () => {

    useEffect(() => {
        console.log('Rodou o effect');

        return () => {
            console.log('Rodou o Cleanup');
        }
    });

return(
    <div className="w-40 h-40 bg-red-800"></div>
);
};