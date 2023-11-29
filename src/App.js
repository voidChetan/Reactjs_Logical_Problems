 
import './App.css';
import Header from './layout/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GroceryApp from './pages/GroceryApp';
import AboutMe from './pages/AboutMe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<AboutMe></AboutMe>} ></Route>
          <Route path='/GroceryApp' element={<GroceryApp></GroceryApp>} ></Route>
          <Route path='/AboutMe' element={<AboutMe></AboutMe>} ></Route>

          <Route path='*' element={<AboutMe></AboutMe>}>  </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
