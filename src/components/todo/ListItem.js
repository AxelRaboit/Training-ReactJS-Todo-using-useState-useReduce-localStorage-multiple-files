import React from 'react';
import './ListItem.css';

const ListItem = ({ todo }) => {

    return (
        <li className={todo.complete ? 'taskDone' : 'taskToDo'}>{todo.content}</li>
    )
};

export default ListItem;
