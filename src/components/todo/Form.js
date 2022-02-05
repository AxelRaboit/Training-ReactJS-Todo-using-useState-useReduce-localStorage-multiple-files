import React, { useState, useEffect , useReducer, Fragment } from 'react';
import Todo from './Todo';
import './Form.css';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, addTodo(action.payload.content)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                  return { ...todo, complete: !todo.complete }
                }
                return todo
              })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos;
    }
}

const getLocalStorage = () => {
    let todos = localStorage.getItem('todos');
    if(todos) {
        return (
            todos = JSON.parse(localStorage.getItem('todos')))
    } else {
        return [];
    }
}

function addTodo(content) {
    return {id: Date.now(), content: content, complete: false}
}


function Form() {

    const [todos, dispatch] = useReducer(reducer, getLocalStorage());
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('id', Date.now());
    },[todos])

    function handleSubmit(e) {
        e.preventDefault();
        if(content) {
            dispatch({type: ACTIONS.ADD_TODO, payload: {content: content}})
            setErrorMessage('');
            setContent('');
        } else {
            setErrorMessage('Veuillez indiquer une tâche')
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <label htmlFor="todoInput">
                        Inscrire une tâche
                    </label>
                    <input 
                        id='todoInput'
                        type="text" 
                        placeholder='ex: Acheter du pain'
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                    {
                        errorMessage && <p className='errorMessage'>{errorMessage}</p>
                    }
                    <button className='submitButton' type='submit'>Valider</button>
                </div>
            </form>
            <div>
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                })}
            </div>
        </Fragment>
    )
}

export default Form;
