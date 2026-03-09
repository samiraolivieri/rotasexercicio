import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Produtos from './pages/Produtos'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Home from './pages/Home'
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;