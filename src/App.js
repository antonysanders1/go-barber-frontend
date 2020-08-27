import React, {Component} from 'react';
import {connect} from 'react-redux';
import BarbersContainer from './containers/BarbersContainer';


class App extends Component {

  componentDidMount() {
  }

  render(){
    return (
      <div className="App">
        App
        <BarbersContainer/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     barber: state.barber
//   }
// }

export default connect()(App);
