import React from 'react';
import './Table.style.css';


const Table = props => {
    const { todoList } = props;
    const renderTodos = todoList.map(todo => {
        return (
            <tr key={todo.title}>
                <td>
                    {todo.title}
                </td>
                <td>
                    {todo.description}
                </td>
            </tr>
        );
    });

    return (
        <table className={'todos-table'}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {renderTodos}
            </tbody>
        </table>
    );
};


export default Table;