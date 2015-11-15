import React from 'react';

export default class Cursor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="cursor"
        style={{
            background: this.props.color,
            top: this.props.y * 20 + '%',
            left: this.props.x * 20 + '%'
        }}
      ></div>
    );
  }
}
