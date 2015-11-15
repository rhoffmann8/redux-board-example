import React from 'react';
import Cell from './Cell';
import Cursor from './Cursor';

class Row extends React.Component {
  
}

export default class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCell(i) {
    return (
      <Cell
        key={i}
        black={!!(i%2)}
      />
    );
  }

  render() {
    const cells = [];

    for (let i = 0; i < 25; i++) {
      cells.push(this.renderCell(i));
    }

    return (
      <div className="board" tabIndex="0" onKeyDown={e => this.props.onMove(e)}>
        {cells}
        <Cursor {...this.props.cursor}/>
      </div>
    );
  }
}