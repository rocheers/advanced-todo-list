import React, { Component } from 'react'
import ListItem from './ListItem';

export default class List extends Component {

  handleClick = (idx) => () => {
    this.props.changeItemStatus(idx);
  };

  render() {
    return (
      <div className="ui middle aligned ordered selection list">
        {this.props.todoList.map((item, idx) => (
          <ListItem key={idx} 
                    item={item}
                    handleClick={this.handleClick(idx)} />
        ))}
      </div>
    )
  }
}
