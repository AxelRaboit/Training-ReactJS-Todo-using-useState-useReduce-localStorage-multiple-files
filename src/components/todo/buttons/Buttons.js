import React from 'react';
import DeleteButton from './DeleteButton';
import ToggleButton from './ToggleButton';
import './Buttons.css';

const Buttons = ({ todo , dispatch }) => {
    return (
        <div className='container__buttons'>
            <ToggleButton todo={todo} dispatch={dispatch} />
            <DeleteButton todo={todo} dispatch={dispatch} />
        </div>
    )
};

export default Buttons;
