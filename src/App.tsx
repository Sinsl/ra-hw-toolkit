import './App.css';
import { Menu } from './components/Menu';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Favorites } from './components/favor/Favorites';
import { CardFilm } from './components/single/CardFilm';
import { useEffect } from 'react';
import { addAllFilm } from './redux/slices/favoritesSlice';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = localStorage.getItem('favor');
    if (storage) {
      dispatch(addAllFilm(JSON.parse(storage)))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <h1>Домашнее задание к блоку "React Redux Toolkit"</h1>
      <h2>Поиск фильмов</h2>
      <div className='container'>        
        <Routes>
          <Route path="/ra-hw-toolkit" element={<Menu />}>
            <Route path="" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path=":id" element={<CardFilm />} />
          </Route>          
        </Routes>
      </div>
    </main>   
  )
}

export default App
