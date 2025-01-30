import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import './App.css';
import Project from './pages/Project/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Landing />}/>
          <Route path='/projects/:id' element={ <Project />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
