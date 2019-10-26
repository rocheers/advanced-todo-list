import React, { Component } from 'react'

export default class InputField extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.props.inputText);
    // this.props.addTodo(this.props.inputText);
    this.props.changeValue('');

  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>What r u gonna do?</label>
          <input type="text" value={this.props.inputText} onChange={(e) => this.props.changeValue(e.target.value)} />
        </div>
        <button className="ui primary button" type="submit">Submit</button>
      </form>
    )
  }
}
