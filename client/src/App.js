import './App.css';
import Register from './components/Register.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './views/Auth.tsx';
import Login from './components/Login.tsx';
import Dashbord from './views/Dashbord.tsx';
import PrivateRoute from "./private/PrivateRoutes.tsx"

function App() {
  return (
    <div>
      <Router>
        <h1>Nav</h1>
        <Routes>
          <Route path="" element={<Auth />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashbord/>
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
