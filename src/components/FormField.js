import React from 'react';

export default class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      address: '',
      city:'',
      state: '',
      zip: '',
      phone: '',
      email: '',
      rank: '',
      age: '',
      gender: '',
      height: '',
      weight: '',
      instructor: '',
      events: ''
    }
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <label>
        {this.props.labelName}:
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </label>
    );
  }
}
