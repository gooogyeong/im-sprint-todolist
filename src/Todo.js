import React from 'react';
import Checkboxes from './Checkboxes'


const Todo = (props) => {
    console.log(props.todos)
    return(
        
            <ul>
                {props.todos.filter((todo) => todo.listTitle === props.currentList && (todo.listTitle.includes(props.currentSearchKeyword) || todo.taskContent.includes(props.currentSearchKeyword))).map((todo, i) => 
                <div className='todo-grid'>
                    <Checkboxes checked={todo.isCompleted} onChange={() => props.handleCheckboxClick(todo)}/>
                    <li key={todo.listTitle + '_' + i}>{todo.taskContent}</li>
                </div>
                )}
            </ul>
        
    )
}

export default Todo;



// return(
//     <div>To-Do
//         <ul>
//             {!(props.currentVideo) ? 
//             props.todos.map((todo, i) => <li key={todo.listTitle + '_' + i}>{todo.taskContent}</li> :
//             props.todos.filter((todo, i)=> <li>{todo.listTitle = props.currentVideo}</li>;)
//             )}
//         </ul>
//     </div>
// )
// }