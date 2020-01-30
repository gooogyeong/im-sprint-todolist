import React from 'react';

const AddTodo = (props) => {
    return (
            <button onClick={props.handleAddTodoClick}>add new task</button>
    )
}

export default AddTodo;