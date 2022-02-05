import React from 'react';
import { ACTIONS } from '../Form';

const ToggleButton = ({ todo, dispatch }) => {

    return (
        <button
            className='listButtonToggle'
            onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
        >
            {
                todo.complete ? 'Annuler' : 'Faite'
            }
        </button>
    )
};

export default ToggleButton;
