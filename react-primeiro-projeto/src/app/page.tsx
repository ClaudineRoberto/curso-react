"use client"

import { useReducer, useState } from "react";
import { Item } from "./types/Item";
import { listReducer } from "./reducers/listReducers";


const Page = () => {

  const [list, dispatch] = useReducer(listReducer, [])
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if(addField.trim() === '') return;

    dispatch({
      type: 'add',
      payload: {
        text: addField
      }
    });
    setAddField('');
  }

  const handleDone = (id: number) => {
    dispatch({
      type: 'toggleDone',
      payload: {
        id: id
      }
    });
  }

  const handleEdit = (id: number) => {
    const item = list.find(item => item.id === id) as Item;
    const newText = window.prompt('Digite o novo texto', item.text) as string;

    if(newText.trim() === ''){
      alert('O texto não pode ser vazio');
      return;
    }
    dispatch({
      type: 'edit_text',
      payload: {
        id: id,
        newText: newText
      }
    });
  }

  const handleDelete = (id: number) => {
    if(window.confirm('Tem certeza que deseja excluir?') === false) return;
    dispatch({
      type: 'remove',
      payload: {
        id: id
      }
    });
  }


  return (
    <div className="max-w-5xl container mx-auto">

      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>

      <div className="max-w-2xl mx-auto border border-gray-400 p-4 my-4 flex rounded-md bg-gray-800">

        <input type="text" 
        className="outline-none flex-1 border border-white p-3 bg-transparent text-white rounded-md" 
        placeholder="Digite um item"
        value={addField}
        onChange={e => setAddField(e.target.value)}
        onKeyUp= {e => e.key === 'Enter' && handleAddButton()}
        />

        <button onClick={handleAddButton} className="p-4">ADICIONAR</button>

      </div>

      <ul className="max-w-2xl mx-auto">

        {list.map(item => (
          <li key={item.id} className="flex p-3 my-3 border-b border-gray-700 items-center">
            <input type="checkbox" className="mr-4 h-5 w-5" checked={item.done} onClick={() => handleDone(item.id)} />
            <p className="flex-1 text-lg">{item.text}</p>
            <button className="mx-4 hover:text-gray-500" onClick={() => handleEdit(item.id)}>Editar</button>
            <button className="mx-4 hover:text-gray-500" onClick={() => handleDelete(item.id)}>Excluir</button>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default Page;