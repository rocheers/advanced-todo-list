import React from 'react';
import InputField from './Components/InputField';
import Header from './Components/Header';
import List from './Components/List';
import * as actions from './actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class TodoApp extends React.Component {

  componentDidMount() {
    //fetch('/api/todos').then(res => res.json()).then(data => console.log(data));
    this.props.actions.loadTodos().catch(error => {
      alert('Loading todos failed' + error);
    });
  }

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <Header title="Advanced Todo List" />
        <InputField inputText={this.props.inputText} addTodo={this.props.actions.addTodo} changeValue={this.props.actions.changeValue} />
        <List todos={this.props.todos} toggleTodo={this.props.actions.toggleTodo} />
      </div>
    )
  }
}

function mapStateToProps({ todos, inputText }) {
  return { todos, inputText };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
