import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from 'react-redux'
import store from './app/store';

import { ThemeProvider } from './context/ThemeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  
);


reportWebVitals();
