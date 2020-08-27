import React from 'react';


const Barber = (props) => {
    return (
        <div>
            {props.barber.name} - {props.barber.online_status}
        </div>
    )
}

export default Barber