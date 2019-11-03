import React, { Component } from 'react';
import ListItem from './ListItem';
import { makePage } from '../utilityFn/utility';
import { NUM_PER_PAGE } from '../constants/todoConstant';
import './list.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 1, cur: 1, pages: [] };
  }

  handleClick = (page) => {
    this.setState((prevState) => ({ cur: page, pages: makePage(prevState.total, prevState.cur, 2) }));
  };

  render() {
    const { todos, toggleTodo } = this.props;
    let { cur } = this.state;
    let total = todos.length % NUM_PER_PAGE === 0 ? Math.floor(todos.length / NUM_PER_PAGE) : Math.floor(todos.length / NUM_PER_PAGE) + 1;
    let pages = makePage(total, cur, 2);
    return (
      <>
        <Router>
          <Switch>
              <Route path={ cur === 1 ? '/' : `/${cur}`}>
                <ul className="ui middle aligned ordered selection list">
                  {todos.slice((cur - 1) * NUM_PER_PAGE, cur * NUM_PER_PAGE).map(todo => (
                    <ListItem
                      key={todo._id}
                      {...todo}
                      onClick={() => toggleTodo(todo._id)}
                    />
                  ))}
                </ul>
              </Route>
            </Switch>
          <div>
            <div className="pagination">
              {pages.map((page, idx) => {
                return page === '...' ?
                  <span className="ellipsis">{page}</span> :
                  <Link to={{ pathname: page === 1 ? '/' : `/${page}` }}>
                    <span
                      className="number"
                      key={idx}
                      onClick={() => this.handleClick(page)}>
                      {page}
                    </span>
                  </Link>
              }
              )}
            </div>
          </div>
        </Router>
      </>
    )
  }
}
