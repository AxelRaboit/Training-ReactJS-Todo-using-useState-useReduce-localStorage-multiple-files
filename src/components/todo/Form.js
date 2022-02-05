import React, { useState, useEffect , useReducer } from 'react';
import Todo from './Todo';
import './Form.css';
import { IoLogoHackernews } from 'react-icons/io5';

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
            if(content.length < 80) {
                dispatch({type: ACTIONS.ADD_TODO, payload: {content: content}})
                setErrorMessage('');
                setContent('');
            } else {
                setErrorMessage('La limite est de 80 characters')    
            }
        } else {
            setErrorMessage('Veuillez indiquer une tâche')
        }
    }

    return (
        <div className='container__form'>
            <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">
                Inscrire une tâche
            </label>
            <div className='container__form__item'>
                <input 
                    id='todoInput'
                    type="text" 
                    placeholder='ex: Acheter du pain'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button className='submitButton' type='submit'>Valider</button>
                </div>
                {
                    errorMessage && <p className='errorMessage'>{errorMessage}</p>
                }
            </form>
            <div className='container__todos'>
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                })}
            </div>
        </div>
    )
}

export default Form;
