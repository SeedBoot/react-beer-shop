import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BeerProvider } from './context/BeerContext';
import styles from './index.css';

render(
    <BeerProvider>
        <App />
    </BeerProvider>,
    document.getElementById('app')
);
