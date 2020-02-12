import React from 'react';
import routes from './router/router-config';
import Routerview from './router/routerview';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routerview routes={routes}></Routerview>
            </BrowserRouter>
        </div>
    );
}

export default App;
