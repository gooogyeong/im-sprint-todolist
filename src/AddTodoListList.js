import React from 'react';

const AddTodoListList = (props) => {
    return(
        <div>
            <input id="new-list" type="text" onKeyUp={props.handleAddTodoListListInputKeyUp}/>
            <button onClick={props.handleAddTodoListListClick}>add list</button>
            {/* <AddTodo /> */}
        </div>
    )
}

export default AddTodoListList;