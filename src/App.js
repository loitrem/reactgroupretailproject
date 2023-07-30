import './App.css';
import {Route, Routes} from 'react-router-dom';
import ViewAll from './components/ViewAll';
import Categories from './components/Categories';
import DisplaySearch from './components/DisplaySearch'
import ProductPage from './components/ProductPage';
import Nav from './components/Nav';
import ApiCalls from './components/ApiCalls';


function App() {
    return (
    <div className="App">
        
        <Nav />
      <Routes>
        <Route path="/"  element={<ApiCalls/>} />
        <Route path="/view"  element={<ViewAll/>} />
        <Route path="/categories"  element={<Categories/>} />
        <Route path="/displaysearch"  element={<DisplaySearch/>} />
        <Route path="/productpage"  element={<ProductPage/>} />
      </Routes>
    </div>
  );
}

export default App;