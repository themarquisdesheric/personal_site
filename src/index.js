import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import 'bulma/css/bulma.css';
import App from './App';

dotenv.config();

ReactDOM.render(<App />, document.getElementById('root'));
