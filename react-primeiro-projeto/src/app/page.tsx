"use client"

import { useState } from "react";
import { ToDoItem } from "./types/ToDoItem";



const Page = () => {

  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<ToDoItem[]>([
    { label: 'Estudar React', checked: true },
    { label: 'Estudar React Native', checked: false }
  ]);

  const handleAddButton = () => {
    if (itemInput !== '') {
      setList([...list, { label: itemInput, checked: false }]);
      setItemInput('');
    }
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, i) => i !== index));
  }

  const toogleItem = (index: number) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">

      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className="flex w-full max-w-xl my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton} className="p-3 bg-green-500 rounded-md text-white">Adicionar</button>
      </div>

      <div className="flex w-full max-w-xl my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">

        <ul className="w-full">
          {list.map((item, index) => (
            <li key={index} className="flex items-center justify-between my-2">
              <div onClick={() => toogleItem(index)} className="flex items-center cursor-pointer">
                <div className="flex items-center mr-3"><input  type="checkbox" checked={item.checked} className="w-6 h-6 cursor-pointer" /></div>
                <div>{item.label}</div>
              </div>
              <div><button onClick={() => deleteItem(index)} className="p-2 bg-red-500 rounded-md text-sm">Deletar</button></div>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
};

export default Page;

