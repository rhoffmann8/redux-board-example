import React from 'react';
import { connect } from 'react-redux';
import { move } from '../actions';
import Board from '../components/Board';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, cursor } = this.props;
    return (
      <Board cursor={cursor} onMove={e => dispatch(move(e))}/>
    );
  }
}

function populate(state) {
  return {
    cursor: state.cursor
  };
}

export default connect(populate)(App);