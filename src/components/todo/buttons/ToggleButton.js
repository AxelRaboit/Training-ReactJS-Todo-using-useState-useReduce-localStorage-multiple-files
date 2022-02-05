import React, { Fragment } from 'react';
import { ACTIONS } from '../Form';
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const ToggleButton = ({ todo, dispatch }) => {

    return (
        <Fragment>
            {todo.complete
                ? (
                    <IoClose
                        className='buttonList listButtonToggleCancel'
                        onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
                    >
                    </IoClose>
                    )
                : (
                    <IoCheckmarkSharp
                        className='buttonList listButtonToggleValidate'
                        onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
                    >
                    </IoCheckmarkSharp>
                    )
            }
        </Fragment>
    )
};

export default ToggleButton;
