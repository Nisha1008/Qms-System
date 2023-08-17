
import './App.css';
import Front from './Front'
import Login from './component/Login'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ExitCus from './component/ExitCus';
import Register from './component/Register'
import Submission from './component/Submission';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/front" element={<Front />} />
        <Route path="/exitcustomer" element={<ExitCus />} />
        <Route path="/submitform" element={<Submission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
