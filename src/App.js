import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:pincode" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
