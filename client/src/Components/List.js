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

