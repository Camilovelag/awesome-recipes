import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import About from './pages/About';
import NavigationBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1 className="center mt-5">404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
