/* @flow */

import './_App.scss';

import React from 'react';

export default class App extends React.Component {
  propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
