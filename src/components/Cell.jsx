import React from 'react';

export default class Cell extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="cell"
        style={{background: this.props.black ? 'black' : 'white'}}
      />
    );
  }
}
