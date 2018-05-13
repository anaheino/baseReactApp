import React from 'react';
import DeviceForm from './DeviceForm';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstArray: null,
      secondArray: null,
      result: null,
    };
  }


  setShort = () => {
    console.log(this.state);
    this.setShort();
  }

  render() {
    return (

      <div className="component-app">
      <h1>
        Please input the desired linkStations and locations as arrays. 
      </h1>
      <div>
        Example linkStations:
        <div>
        [0, 0, 10], [20, 20, 5], [10, 0, 12]
        </div>
      </div>
      <div>
        Example locations:
          <div>
          [0,0], [100, 100], [15,10],[18, 18]
          </div>     
      </div>
      <div>
        <DeviceForm/> 
      </div>
      </div>
    );
  }
}
export default App;