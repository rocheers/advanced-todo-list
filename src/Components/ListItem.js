import React from 'react'

export default function ListItem(props) {
  let cx;
  if (props.item.finished) {
    cx = { textDecoration: 'line-through' };
  }
  return (
    <div className="item" onClick={props.handleClick}>
      <h4 style={cx}>{props.item.content}</h4>
    </div>
  )
}
