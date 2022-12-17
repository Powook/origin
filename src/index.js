import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderTree(state){
   root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App store={state} dispatch = {store.dispatch.bind(store)} />
        </BrowserRouter>  
      </React.StrictMode>
    );
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)


reportWebVitals();
