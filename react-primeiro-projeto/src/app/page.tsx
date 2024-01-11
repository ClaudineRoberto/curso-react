"use client"

import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { ThemeProvider } from "./contexts/ThemeContext";

const page = () => {
    return (
        <ThemeProvider>
            <Container>
              <header className="py-5">
                <h1 className="text-3xl">Título da página</h1>
              </header>
              <section>
                <p className="my-5">Conteúdo da página</p>
              </section>
              <Button label="Clique Aqui" onClick={()=> { }} />
              <ThemeSwitch />
            </Container>
        </ThemeProvider>
    );
}

export default page;