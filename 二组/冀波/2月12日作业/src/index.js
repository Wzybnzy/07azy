import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

//引入样式
import  './components/App.css'

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>, document.getElementById('root'));
