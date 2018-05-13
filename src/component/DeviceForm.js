import React from 'react';
import _ from 'lodash'
import calculateDevice from '../logic/calculateDevice';

class DeviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkstations: '',
      locations: ''
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLocationChange(event) {
    this.setState({locations: event.target.value}); 
  }

  handleLinkChange(event) {
    this.setState({linkstations: event.target.value});
  }

  handleSubmit(event) {
    if (!this.state.linkstations || !this.state.locations) {
      event.preventDefault();
      return;
    }
    var stationArray = JSON.parse("[" + this.state.linkstations + "]");
    var locationArray = JSON.parse("[" + this.state.locations + "]");
    var locationList = calculateDevice(stationArray, locationArray);
    _.each(locationList, function(location) {
      if (location.linkStation) {
        console.log('Optimal linkstation for location ', _.pick(location, 'x', 'y'), 'is linkStation ',
          _.pick(location.linkStation, 'x', 'y', 'reach'), ' it has power ', location.linkStation.power);
        }
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          LinkStations:
          <input type="text" value={this.state.linkstations} onChange={this.handleLinkChange} />
        </label>
      </div>
      <div>
        <label>
          Locations: 
          <input type="text" value={this.state.locations} onChange={this.handleLocationChange} />
        </label>
      </div>
      <input type="submit" value="Submit" />
      </form>
      <div>
      </div>
      Check browser console after submission
      </div>
    );
  }
};

export default DeviceForm;