import React, { Component } from 'react';
import './App.css';
import InputContainer from './containers/InputContainer';
import ListContainer from './containers/ListContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todoText) {
    const todoList = this.state.todoList;
    todoList.push(todoText);
    this.setState(() => ({todoList}));
  }

  deleteTodo(itemIndex) {
    let todoList = this.state.todoList;
    todoList.splice(itemIndex, 1);
    window.setTimeout(() => {
      this.setState(() => ({todoList}));
    });
  }

  render() {
    const list = this.state.todoList;
    return (
      <div className="App">
        <div className="App-header">
          <InputContainer 
            addTodo = {this.addTodo}
          />
          <ListContainer list={list} onListItemClick={this.deleteTodo}></ListContainer>
        </div>
      </div>
    
    );
  }
}

export default App;
