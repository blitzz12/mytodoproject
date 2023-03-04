import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Index from './pages/Index';
import UserHomePage from './pages/UserHomePage';

import './styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signin' element={<Index />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<UserHomePage />} />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
