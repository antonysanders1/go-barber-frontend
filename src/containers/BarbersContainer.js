import React, {Component} from 'react';
import NewBarberForm from '../components/NewBarberForm';
import Barber from '../components/Barber';
import {connect} from 'react-redux';
import {fetchBarber} from '../actions/fetchBarber'

class BarbersContainer extends Component {

    componentDidMount() {
        this.props.fetchBarber()
    }

    render() {
        return (
            <div>
                <NewBarberForm/>
                <Barber barber={this.props.barber}/>
            </div>
        )
    }

}

const mapState = state => {
    return {
        barber: state.barber
    }
}

export default connect(mapState, {fetchBarber})(BarbersContainer);