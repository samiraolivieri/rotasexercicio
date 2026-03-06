import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#7B68EE' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link style={{ color: "white", marginRight: "20px" }} to="/">Home</Link></li>
        <li><Link style={{ color: "white", marginRight: "20px" }} to="/produtos">Produtos</Link></li>
        <li><Link style={{ color: "white", marginRight: "20px" }} to="/empresa">Empresa</Link></li>
        <li><Link style={{ color: "white", marginRight: "20px" }} to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;