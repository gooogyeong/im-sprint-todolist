import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <div id='header-grid'>
            <div>
                {!(props.header) ? <div><h1>Nothing To Do</h1></div> : <div><h1 id='list-title'>{props.header}</h1></div>}
            </div>
        </div>
    )
}

//header={this.state.todoListList}

export default Header;