import React, { Component } from 'react';
import logo from './logo.svg';
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
  }

  addTodo(todoText) {
    const todoList = this.state.todoList;
    todoList.push(todoText);
    this.setState(() => ({todoList}));
    console.log("DISPLAYING TODO LIST FROM MAIN APP CONTAINER: ");
    console.log(todoList);
  }

  render() {
    const list = this.state.todoList;
    return (
      <div className="App">
        <div className="App-header">
          <InputContainer 
            addTodo = {this.addTodo}
          />
          <ListContainer list={list}></ListContainer>
        </div>
      </div>
    
    );
  }
}

export default App;
