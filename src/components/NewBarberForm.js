import React, {Component} from 'react';

export default class NewBarberForm extends Component {

    render() {

        return (
            <div>
                <form>
                    <label htmlFor="name"></label>
                    <input type="text" name="name"/>

                    <label htmlFor="email"></label>
                    <input type="text" name="email"/>

                    <label htmlFor="city"></label>
                    <select name="city" id=""></select>

                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}