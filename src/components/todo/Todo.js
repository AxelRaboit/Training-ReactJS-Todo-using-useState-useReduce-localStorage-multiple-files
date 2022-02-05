import React from 'react';
import Buttons from './buttons/Buttons';
import ListItem from './ListItem';
import './Todo.css';

function Todo({ todo, dispatch }) {

    return (
        <div className='container__list'>
            <ul className={`${todo.complete ? 'completedList' : 'incompletList'}`}>
                <Buttons todo={todo} dispatch={dispatch} />
                <ListItem todo={todo}/>
            </ul>
        </div>
    )
}

export default Todo;
