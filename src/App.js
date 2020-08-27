import React, {Component} from 'react';


class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/customers/1/appointments')
    .then(res => res.json())
    .then(data => console.log(data[0].barber.name))
  }

  render(){
    return (
      <div className="App"></div>
    )
  }
}

export default App;
