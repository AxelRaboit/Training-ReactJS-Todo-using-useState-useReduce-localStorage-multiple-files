import React from 'react';
import { ACTIONS } from '../Form';

const DeleteButton = ({ todo, dispatch }) => {

    return (
        <button
            className='listButtonDelete'
            onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
        >
            Supprimer
        </button>
    )
};

export default DeleteButton;
