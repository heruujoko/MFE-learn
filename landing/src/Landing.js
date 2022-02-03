import React from 'react';
import { Provider } from "react-redux";
import Catalogs from './components/Catalogs';
import store from './redux/index';

const Landing = () => {
    return (
        <Provider store={store}>
            <Catalogs />
        </Provider>
    )
}

export default Landing