import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import ViewAll from './components/ViewAll';
import Categories from './components/Categories';
import DisplaySearch from './components/DisplaySearch'
import ProductPage from './components/ProductPage';
import Nav from './components/Nav';

function App() {
    return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path="/"  element={<Main/>} />
        <Route path="/view"  element={<ViewAll/>} />
        <Route path="/categories"  element={<Categories/>} />
        <Route path="/displaysearch"  element={<DisplaySearch/>} />
        <Route path="/productpage"  element={<ProductPage/>} />
      </Routes>
    </div>
  );
}

export default App;
