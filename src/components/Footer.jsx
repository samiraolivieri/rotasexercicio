function Footer() {
    const anoAtual = new Date().getFullYear();
    
    return (
      <footer style={{ textAlign: 'center', padding: '5px', borderTop: '1px solid #ccc', backgroundColor: '#7B68EE' }}>
        <p>&copy; {anoAtual} TechSolutions</p>
        <div>
          <span style={{ margin: '0 10px' }}>Facebook</span>
          <span style={{ margin: '0 10px' }}>Instagram</span>
          <span style={{ margin: '0 10px' }}>LinkedIn</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;