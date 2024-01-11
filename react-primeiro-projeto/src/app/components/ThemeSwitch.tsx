import { useTheme } from "../contexts/ThemeContext";

export const ThemeSwitch = () => {
    const themeCtx = useTheme();
    return(
        <div className="fixed top-0 right-20">
            <button
                className={`border px-4 py-3 rounded-md my-5
                    ${themeCtx?.theme === 'dark' ?
                        'border-gray-700 bg-gray-700 text-white' :
                        'border-gray-300 bg-gray-300 text-gray-900'
                    }
            `}
                onClick={() => themeCtx?.setTheme(themeCtx?.theme === 'dark' ? 'light' : 'dark')}
            >
                {themeCtx?.theme === 'dark' ? 'Mudar para Light Mode' : 'Mudar para Dark Mode'}
            </button>
        </div>
    );
}