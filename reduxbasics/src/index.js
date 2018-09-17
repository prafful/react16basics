import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";

import { createStore } from 'redux'
import RootComponent from './component/RootComponent';
import allReducers from './reducers';

const myStore = createStore(allReducers)

ReactDOM.render(
            <Provider store={myStore}>
                <RootComponent/>
            </Provider>,
            document.getElementById('root'))