import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import ViewAll from './components/ViewAll';
import Categories from './components/Categories';
import Nav from './components/Nav';
import DisplaySearch from './components/DisplaySearch'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/"  element={<Main/>} />
        <Route path="/viewall"  element={<ViewAll/>} />
        <Route path="/categories"  element={<Categories/>} />
        <Route path="/displaysearch"  element={<DisplaySearch/>} />
      </Routes>
    </div>
  );
}

export default App;
