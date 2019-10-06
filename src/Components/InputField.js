import React, { Component } from 'react'

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({ inputText: '' });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>What r u gonna do?</label>
          <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
        </div>
        <button className="ui primary button" type="submit">Submit</button>
      </form>
    )
  }
}

// import React from 'react';
// import { connect } from 'react-redux';
// import { addTodo } from '../actions';

// const AddTodo = ({ dispatch }) => {
//   let input;
//   return (
//     <div>
//       <form className="ui form" onSubmit={e => {
//         e.preventDefault()
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <div className="field">
//            <label>What r u gonna do?</label>
//            <input type="text" />
//         </div>
//         <button className="ui primary button" type="submit">Submit</button>
//       </form>

//     </div>
//   )
// }

// export default connect()(AddTodo);
