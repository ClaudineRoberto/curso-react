import { Item } from "../types/Item";

type AddAction = {
    type: 'add',
    payload: {
        text: string;
    }
}

type EditTextAction = {
    type: 'edit_text',
    payload: {
        id: number;
        newText: string;
    }

}

type ToggleDoneAction = {
    type: 'toggleDone',
    payload: {
        id: number;
    }
}

type RemoveAction = {
    type: 'remove',
    payload: {
        id: number;
    }
}



type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions) => {
    switch(action.type){
        case 'add':
            return [...list, {id: list.length, text: action.payload.text, done: false}];

        case 'edit_text':
            return list.map(item => item.id === action.payload.id ? {...item, text: action.payload.newText} : item);

        case 'toggleDone':
            return list.map(item => item.id === action.payload.id ? {...item, done: !item.done} : item);

        case 'remove':
            return list.filter(item => item.id !== action.payload.id);

        default:
            return list;
    }

    return list;
}