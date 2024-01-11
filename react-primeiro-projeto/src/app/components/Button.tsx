import { useTheme } from "../contexts/ThemeContext";

type Props = {
    label: string;
    onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
    const themeCtx = useTheme();


    return (
        <button
            className={`border px-4 py-3 rounded-md
                ${themeCtx?.theme === 'dark' ?
                    'border-gray-700 bg-gray-700 text-white' :
                    'border-gray-300 bg-gray-300 text-gray-900'
                }
        `}
            onClick={onClick}
        >

            {label}

        </button>
    );
}