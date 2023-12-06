"use client"

import { useState } from "react";
import { Square } from "./components/Square";


const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="p-3 rounded bg-blue-600 m-2" onClick={() => setShow(!show)} >Mostrar/Ocultar</button>
      {show && <Square />}
    </div>
  );
};

export default Page;