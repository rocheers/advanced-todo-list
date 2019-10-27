import React from 'react';
import { COMPLETED } from '../constants/todoConstant';

const ListItem = ({ onClick, status, text }) => (
  <li className="item" onClick={onClick} style={{ textDecoration: status === COMPLETED ? 'line-through' : 'none' }}>
    {text}
  </li>
);

export default ListItem;
