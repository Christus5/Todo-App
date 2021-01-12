import React from 'react';
import './Table.style.css';


const Table = props => {
    const { todoList } = props;
    const renderTodos = todoList.map(todo => {
        return (
            <tr key={todo.title}>
                <td className={'todo-td'}>
                    <a href={'#'}>{todo.title}</a>
                </td>
                <td className={'todo-td'}>
                    {todo.description}
                </td>
            </tr>
        );
    });

    return (
        <table className={'todos-table'}>
            <thead>
                <tr>
                    <th className={'todo-th'}>Title</th>
                    <th className={'todo-th'}>Description</th>
                </tr>
            </thead>
            <tbody>
                {renderTodos}
            </tbody>
        </table>
    );
};


export default Table;