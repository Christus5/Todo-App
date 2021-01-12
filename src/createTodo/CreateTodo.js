import React from 'react';
import './CreateTodo.css';


const CreateTodo = props => {
    const {
        todoTitle, handleTitleChange,
        todoDescription, handleDecriptionChange,
        addTodo
     } = props;

    return (
        <div className={'create-todo'}>
            <div className={'inputs'}>
                <label htmlFor={'title'}>Title</label>
                <input
                    name={'title'}
                    type={'text'}
                    value={todoTitle}
                    onChange={handleTitleChange}
                    placeholder={"Enter Title"}
                />
                <label htmlFor={'description'}>Description</label>
                <textarea
                    name={'description'}
                    value={todoDescription}
                    onChange={handleDecriptionChange}
                    placeholder={"Enter Description"}
                ></textarea>
            </div>
            <div className={'buttons'}>
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    );
};


export default CreateTodo;