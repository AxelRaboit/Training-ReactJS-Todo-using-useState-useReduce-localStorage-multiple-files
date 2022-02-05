import React from 'react';
import Buttons from './buttons/Buttons';
import ListItem from './ListItem';
import './Todo.css';

function Todo({ todo, dispatch }) {

    return (
        <ul className={todo.complete ? 'completedList' : 'incompletList'}>
            <ListItem todo={todo}/>
            <Buttons todo={todo} dispatch={dispatch} />
        </ul>
    )
}

export default Todo;
