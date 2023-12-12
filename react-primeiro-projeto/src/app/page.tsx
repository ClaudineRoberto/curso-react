"use client"

import { useState } from "react";
import { Header } from "./components/Header";
import { CountContext} from "./contexts/CountContext";



const Page = () => {

  const [onlineCount, setOnlineCount] = useState(92);
 
  return (
    <div className="container mx-auto">
      <CountContext.Provider value={{onlineCount, setOnlineCount}}>
        <Header />
      </CountContext.Provider>
    </div>
  );
};

export default Page;