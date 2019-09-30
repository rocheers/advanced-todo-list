import React, { Component } from 'react';
import Header from './Components/Header';
import InputField from './Components/InputField';
import List from './Components/List';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  handleSubmit = value => {
    let todoList = this.state.todoList;
    todoList.push({ content: value, finished: false });
    this.setState({ todoList });
  }

  changeItemStatus = id => {
    let todoList = this.state.todoList.map((item, idx) => {
      if (id !== idx) {
        return item;
      } else {
        return {content: item.content, finished: !item.finished};
      }
    });
    console.log(todoList);
    this.setState({ todoList });
  }

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <Header title="Advanced Todo List" />
        <InputField handleSubmit={this.handleSubmit} />
        <List todoList={this.state.todoList} changeItemStatus={this.changeItemStatus} />
      </div>
    )
  }
}
