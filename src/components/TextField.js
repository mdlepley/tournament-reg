import React from 'react';

export default class TextField extends React.Component {
  render() {
    return(
      <label>
        {{props.label}}:
        <input type="text" value={this.state.name} onChange={this.handleChange} /> // can probably change "text" to {props.type} or something to make this whole component more dynamic
      </label>
    );
  }
}
