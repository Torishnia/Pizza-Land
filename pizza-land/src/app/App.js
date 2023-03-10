import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import styles from './app.module.sass';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.container}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
