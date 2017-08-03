import React from 'react';
import FormField from './FormField';  // need a webpack.config.js file to be able to use relative paths

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);
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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value === 'checkbox' ? target.checked : target.value;
    const inputName = target.name;

    this.setState({
      [inputName]: value
    });
  }

  handleSubmit(e) {
    this.checkEmpty();
    e.preventDefault();
    console.log('submitted with data: ' + this.state);
  }

  checkEmpty() {
    console.log('...checking form...');
    return false; // actually check, then return boolean representing if any required's are empty
  }

  render() {
    return (
      <div className="form">
        <form className="entry-form" onSubmit={this.handleSubmit}>
          {/*<label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Address:
            <input name="address" type="text" value={this.state.address} onChange={this.handleInputChange} />
          </label>
          <label>
            City:
            <input name="city" type="text" value={this.state.city} onChange={this.handleInputChange} />
          </label>
          <label>
            State:
            <input name="state" type="text" value={this.state.state} onChange={this.handleInputChange} />
          </label>*/}

          {/* might change all this to a loop that dynamically generates the fields based on an array of stuffs */}
          <FormField labelName="Name" type="text" />
          <FormField labelName="Address" type="text" />
          <FormField labelName="City" type="text" />
          <FormField labelName="State" type="text" />
          <FormField labelName="Zip" type="number" />
          <FormField labelName="Phone" type="tel" />
          <FormField labelName="Email" type="email" />

          <FormField labelName="Rank" type="text" />  {/* change to dropdown */}
          <FormField labelName="Age" type="number" />
          <FormField labelName="Gender" type="text" />  {/* change to radios */}
          <FormField labelName="Height" type="number" />
          <FormField labelName="Weight" type="number" />

          <fieldset>
            <legend>Events</legend>
            {/* need to convert these to FormField component. FormField component needs to be more robust */}
            <div>
              <input type="checkbox" id="patterns" name="event" value="Patterns" />
              <label htmlFor="patterns">Patterns</label>
            </div>
            <div>
              <input type="checkbox" id="sparring" name="event" value="Sparring" />
              <label htmlFor="sparring">Sparring</label>
            </div>
            <div>
              <input type="checkbox" id="breaking" name="event" value="Breaking" />
              <label htmlFor="breaking">Breaking</label>
            </div>
            <div>
              <input type="checkbox" id="team-patterns" name="event" value="Team Patterns" />
              <label htmlFor="team-patterns">Team Patterns</label>
            </div>
            <div>
              <input type="checkbox" id="team-sparring" name="event" value="Team Sparring" />
              <label htmlFor="team-sparring">Team Sparring</label>
            </div>
          </fieldset>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
