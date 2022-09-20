import './App.css';
import Register from './components/Register.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './views/Auth.tsx';
import Login from './components/Login.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Nav</h1>
        <Routes>
          <Route path="" element={<Auth />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;