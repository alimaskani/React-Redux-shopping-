import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import StoreObject from './redux/Store';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={StoreObject().store}>
        <PersistGate persistor={StoreObject().persistor}>
                <App />
        </PersistGate>
    </Provider>

);
