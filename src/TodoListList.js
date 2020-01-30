import React from 'react';
import AddTodoListList from './AddTodoListList'

const TodoListList = (props) => {
    console.log(props)
    return (
        <div id='todolistlist-grid'>
            <ul>
                {props.todoListList.map((list, i) =>
                <li key={'list+' + i} onClick={()=>props.handleTodoListListClick(list)}>{list}</li>
                )}
            </ul>
            <AddTodoListList handleAddTodoListListClick={props.handleAddTodoListListClick} handleAddTodoListListInputKeyUp={props.handleAddTodoListListInputKeyUp}/>
        </div>
    )
}

export default TodoListList

// const VideoList = (props) => {
//     return (
//       <div className="video-list media">
//         {props.videos.map((video) => 
//         <VideoListEntry 
//           key={video.etag}
//           video={video}
//           handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}
//         />)}
//       </div>
//     );
//   };