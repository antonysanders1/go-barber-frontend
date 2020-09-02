import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import App from './App.js';
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render( <React.StrictMode>
        <Provider store = { store }>
            <ThemeProvider theme = { theme }>
                <App/>
            </ThemeProvider>
        </Provider> 
    </React.StrictMode>,
    document.getElementById('root')
);