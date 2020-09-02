export const loginBarber = (barber) => {
    console.log('Inside the fetch')
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({ barber: barber })
            })
            .then(res => res.json())
            .then(barberData => {
                if (barberData.error) {
                    dispatch({ type: 'LOGIN_ERROR', error: barberData.error })
                } else {
                    dispatch({ type: 'LOGIN_BARBER', payload: barberData })
                }
            })

    }
}

export const loginCustomer = (customer) => {
    console.log('Inside the fetch')
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({ customer: customer })
            })
            .then(res => res.json())
            .then(customerData => dispatch({ type: 'LOGIN_CUSTOMER', payload: customerData }))
    }
}