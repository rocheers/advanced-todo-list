// import React from 'react'

// export default function ListItem(props) {
//   let cx;
//   if (props.item.finished) {
//     cx = { textDecoration: 'line-through' };
//   }
//   return (
//     <div className="item" onClick={props.handleClick}>
//       <h4 style={cx}>{props.item.content}</h4>
//     </div>
//   )
// }

import React from 'react';

const ListItem = ({ onClick, status, text }) => (
  <li className="item" onClick={onClick} style={{textDecoration: status === 'completed' ? 'line-through' : 'none'}}>
    {text}
  </li>
)

export default ListItem;