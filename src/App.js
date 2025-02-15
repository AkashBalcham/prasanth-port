import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import './App.css';
import VideoPage from './pages/Video/Video';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Landing />}/>
          <Route path="/videos/:videoId" element={<VideoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
