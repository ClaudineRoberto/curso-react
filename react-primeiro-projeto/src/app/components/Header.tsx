import { useContext } from "react";
import { LoggedUserContext } from "../contexts/LoggedUser";

export const Header = () => {
    const loggedUserCtx = useContext(LoggedUserContext);

    const handleLogout = () => {
        loggedUserCtx?.setName('');
    }

    const handleLogin = () => {
        loggedUserCtx?.setName('Claudine');
    }

    return(
        <div>
            <h1>Exercícios de Contexts para usuarios logados</h1>
            {loggedUserCtx?.name &&
                <>
                <p>Usuário logado: {loggedUserCtx.name}</p>
                <button className="bg-blue-500 rounded-md p-3 my-3" onClick={handleLogout}>SAIR</button>
                </>
            }

            {
                !loggedUserCtx?.name &&
                <>
                <p>Você não está logado</p>
                <button className="bg-blue-500 rounded-md p-3 my-3" onClick={handleLogin}>ENTRAR</button>
                </>
            }

        </div>
    );
}