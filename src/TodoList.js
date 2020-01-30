import React from 'react';
import AddTodo from './AddTodo'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div>
            <input id="new-todo" type="text" onKeyUp={props.handleAddTodoInputKeyUp}/>
            <AddTodo handleAddTodoClick={props.handleAddTodoClick}/>
            <Todo currentSearchKeyword={props.currentSearchKeyword} currentList={props.currentList} todos={props.todos} handleCheckboxClick={props.handleCheckboxClick}/>
        </div>
    )
}

export default TodoList;
