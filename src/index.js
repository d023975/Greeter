import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Greeter from './App';
import {Counter} from './App'; 

const rootElement = document.getElementById('root');
const yar = document.getElementById('yar');
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
ReactDOM.render(<Greeter maxLength={20} />, rootElement);
ReactDOM.render(<Counter />, yar);
