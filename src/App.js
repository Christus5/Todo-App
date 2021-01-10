import React from 'react';
import Table from './table/Table';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoTitle: '',
      todoDescription: ''
    }

    this.handleTitleChange = (e) => {
      this.setState({
        todoTitle: e.target.value
      });
    }
    this.handleDecriptionChange = e => {
      this.setState({
        todoDescription: e.target.value
      });
    };
    this.addTodo = () => {
      const newTodo = {
        title: this.state.todoTitle,
        description: this.state.todoDescription
      };
      this.setState((state) => ({
        todoList: [...state.todoList, newTodo],
        todoTitle: '',
        todoDescription: ''
      }));
    };
  }


  render() {
    const { todoTitle, todoDescription, todoList } = this.state;

    return (
      <div className="App">
        <div className={'create-todo'}>
          <div className={'inputs'}>
            <input
              type={'text'}
              value={todoTitle}
              onChange={this.handleTitleChange}
            />
            <textarea
              value={todoDescription}
              onChange={this.handleDecriptionChange}
            ></textarea>
          </div>
          <div className={'buttons'}>
            <button onClick={this.addTodo}>Add Todo</button>
          </div>
        </div>
        <div className={'table-wrapper'}>
          <Table todoList={todoList} />
        </div>
      </div>
    );
  }
}

export default App;
