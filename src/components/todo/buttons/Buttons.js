import React, { Fragment } from 'react';
import DeleteButton from './DeleteButton';
import ToggleButton from './ToggleButton';
import './Buttons.css';

const Buttons = ({ todo , dispatch }) => {
    return (
        <Fragment>
            <ToggleButton todo={todo} dispatch={dispatch} />
            <DeleteButton todo={todo} dispatch={dispatch} />
        </Fragment>
    )
};

export default Buttons;
