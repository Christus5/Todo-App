import React from 'react';
import Table from './table/Table';
import CreateTodo from './createTodo/CreateTodo';
import Card from './card/Card';
import Grid from './grid/Grid';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoTitle: '',
      todoDescription: '',
      gridView: false
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
      if (!this.state.todoTitle || !this.state.todoDescription) {
        return;
      }
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
    const { todoTitle, todoDescription, todoList, gridView } = this.state;


    return (
      <div className="App">
        <header className={'page-header'}>
          <div className={'create-todo-wrapper'}>
            <CreateTodo
              todoTitle={todoTitle}
              handleTitleChange={this.handleTitleChange}
              todoDescription={todoDescription}
              handleDecriptionChange={this.handleDecriptionChange}
              addTodo={this.addTodo}
            />
          </div>
        </header>

        <section>
          <div>
            <button
              className={'toggle-grid-button'}
              onClick={() => this.setState(state => ({ gridView: !state.gridView }))}
            >
              <span className={'material-icons'}>
                apps
              </span>
            </button>
          </div>
          <div className={'content'}>
            {gridView ? (
              <div className={'grid-wrapper'}>
                <Grid dataSource={todoList} Card={Card} />
              </div>
            ) : (
                <div className={'table-wrapper'}>
                  <Table todoList={todoList} />
                </div>
              )}
          </div>


        </section>
      </div >
    );
  }
}

export default App;
