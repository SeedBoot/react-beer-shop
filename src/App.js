import React from 'react';
import { Sidebar, Shop } from './components';
import styles from './App.css';

const App = () => {
    return (
        <main className={styles.main}>
            <Sidebar/>
            <Shop/>
        </main>
    )
};

export default App;
