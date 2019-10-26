// import React, { Component } from 'react'
// import ListItem from './ListItem';

// export default class List extends Component {

//   handleClick = (idx) => () => {
//     this.props.changeItemStatus(idx);
//   };

//   render() {
//     return (
//       <div className="ui middle aligned ordered selection list">
//         {this.props.todoList.map((item, idx) => (
//           <ListItem key={idx} 
//                     item={item}
//                     handleClick={this.handleClick(idx)} />
//         ))}
//       </div>
//     )
//   }
// }
import React from 'react';
import ListItem from './ListItem';


const List = ({ todos, toggleTodo }) => (
  <ul className="ui middle aligned ordered selection list">
    {todos.map(todo => (
      <ListItem 
        key={todo._id}
        {...todo}
        onClick={() => toggleTodo(todo._id)}
      />
    ))}
  </ul>
)

export default List;

