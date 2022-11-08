import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from "./redux/store"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <PersistGate loading={null} persistor={persistor} >
             
                <Provider store={store}>
                <ToastContainer
                        theme='dark'
                        position="top-right"
                        autoClose={3000}
                        closeOnClick
                        pauseOnHover={false}
                        style={{ fontSize: 50 }}
                        />
                      
                        <App />
                </Provider>
                
        </PersistGate>
);
