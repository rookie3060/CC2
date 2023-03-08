import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Edit from './Edit';
import Add from './Add';
import App from './App';
import NBA from './NBA';
import reportWebVitals from './reportWebVitals';
import { Route,Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
        <Route path="/" element={<Add/>}></Route>
        <Route path="/home" element={<NBA/>}></Route>
        <Route path="/edit" element={<Edit/>}></Route>
        <Route path="/home/edt/:id" element={<Edit/>}></Route>
      </Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
