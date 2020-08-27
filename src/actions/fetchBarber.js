export function fetchBarber() {
    console.log('Inside the fetch')
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/barbers/1')
        .then(res => res.json())
        .then(barberData => dispatch({type: 'FETCH_BARBERS', payload: barberData}))
    }
}