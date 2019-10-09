import React from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class LoginApp extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }
  handleSubmit = e => {
        e.preventDefault();
        this.props.inputName === 'yutong' && this.props.inputPassword === 'yuan' ? alert('Successful Login') : alert('Failed Attempt');
        this.props.actions.changeNameValue('');
        this.props.actions.changePasswordValue('');
        console.log(this.props);
  };
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Your username</label>
          <input type="text" value={this.props.inputName} onChange={(e) => this.props.actions.changeNameValue(e.target.value)} />
        </div>
        <div className="field">
          <label>Your password</label>
          <input type="password" value={this.props.inputPassword} onChange={(e) => this.props.actions.changePasswordValue(e.target.value)} />
        </div>
        <button className="ui primary button" type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

function mapStateToProps({ inputName, inputPassword }) {
  return { inputName, inputPassword };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);