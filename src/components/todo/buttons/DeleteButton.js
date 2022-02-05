import React from 'react';
import { ACTIONS } from '../Form';
import { FaTrash } from 'react-icons/fa';

const DeleteButton = ({ todo, dispatch }) => {

    return (
        <FaTrash
            className='buttonList listButtonDelete'
            onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
        >
            Supprimer
        </FaTrash>
    )
};

export default DeleteButton;
