import React from 'react';
import { ACTIONS } from '../Form';
import { FaEdit } from 'react-icons/fa';

const EditButton = ({ todo, dispatch }) => {

    return (
        <FaEdit
            className='buttonList listButtonEdit'
            onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })}
        >
            Supprimer
        </FaEdit>
    )
};

export default EditButton;
