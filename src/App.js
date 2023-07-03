import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={''} />
          <Route path="/search" element={''} />
          <Route path="/cart" element={''} />
          <Route path="/login" element={''} />
          <Route path="/register" element={''} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
