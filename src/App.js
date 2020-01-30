import React from 'react';
import Header from './Header';
import Search from './Search';
import TodoListList from './TodoListList';
import TodoList from './TodoList';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoListList: [],
      todoList: [],
      currentList: '',
      currentSearchKeyword: '' //document.getElementById('search').value
    }
    this.handleTodoListListClick = this.handleTodoListListClick.bind(this);
    this.handleAddTodoListListClick = this.handleAddTodoListListClick.bind(this);
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    this.handleAddTodoInputKeyUp = this.handleAddTodoInputKeyUp.bind(this);
    this.handleAddTodoListListInputKeyUp = this.handleAddTodoListListInputKeyUp.bind(this);
    //this.handleCheckboxClick = handleCheckboxClick;
  }

  // handleSearchClick() {
  //   const searchKeyword = document.getElementById('search').value;
  //   const todoList = this.state.todoList;
  //   let filteredTodoList = [];
  //   //let filteredTaskContent = [];
  //   for (let i=0; i<todoList.length; i++) {
  //     if (todoList[i].listTitle.includes(searchKeyword) || todoList[i].taskContent.includes(searchKeyword)) {
  //       filteredTodoList.push(todoList[i].listTitle)
  //     }
  //   }
  //   if (filteredTodoList.length !== 0) {this.setState({currentSearchKeyword: searchKeyword})}

  // }

  handleTodoListListClick(TodoListList) {
    this.setState({
      currentList: TodoListList
    })
    // const todoList = this.state.

  }

  handleAddTodoListListClick() {
    const newListTitle = document.getElementById('new-list').value;
    const todoListList = this.state.todoListList;
    //console.log(todoListList);
    todoListList.push(newListTitle);
    //console.log(todoListList);
    this.setState({todoListList: todoListList})
    if (todoListList.length === 1) {this.setState({currentList: newListTitle})}
  }

  handleAddTodoListListInputKeyUp(e) {
    if (e.keyCode === 13) {
      console.log('enter')
      this.handleAddTodoListListClick();
    }
  }

  handleAddTodoClick() {
    let newTodo = {
      listTitle: document.getElementById('list-title').innerText,
      isCompleted: false,
      taskContent: document.getElementById('new-todo').value
    }
    let todoList = this.state.todoList;
    console.log(todoList);
    todoList.push(newTodo);
    console.log(todoList);
    this.setState({todoList: todoList})
  }

  handleAddTodoInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleAddTodoClick()
    }
  }
  
  handleCheckboxClick(todo) {
    todo.isComplete = !todo.isCompleted
  }

  render() {
    return (
      <div id='app-grid'>
        <div>
          <Search />
          <TodoListList 
          todoListList={this.state.todoListList} 
          handleAddTodoListListClick={this.handleAddTodoListListClick}
          handleAddTodoListListInputKeyUp={this.handleAddTodoListListInputKeyUp}
          handleTodoListListClick={this.handleTodoListListClick}/>
        </div>
        <div>
          <Header header={this.state.currentList}/>
          <TodoList 
          currentList={this.state.currentList} 
          currentSearchKeyword={this.state.currentSearchKeyword}
          todos={this.state.todoList} 
          handleAddTodoClick={this.handleAddTodoClick}
          handleAddTodoInputKeyUp={this.handleAddTodoInputKeyUp}
          handleCheckboxClick={this.handleCheckboxClick}/>
        </div>
      </div>
    )
  }
}

export default App;

