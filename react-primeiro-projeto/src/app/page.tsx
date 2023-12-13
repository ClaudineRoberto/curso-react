"use client"

import { Header } from "./components/Header";
import { LoggedUserContext, LoggedUserProvider } from "./contexts/LoggedUser";


const Page = () => {

 
  return (
    <div className="container mx-auto">
      <LoggedUserProvider>
        <Header />
      </LoggedUserProvider>
    </div>
  );
};

export default Page;