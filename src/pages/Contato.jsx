import { useState } from "react"

function Contato() {
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function enviarFormulario(e) {
        e.preventDefault()
        
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso para a TechSolutions.`)
    }

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Contato</h1>
            
            <p style={{ textAlign: 'center' }}>
                Precisa de suporte técnico ou um orçamento? Preencha o formulário abaixo 
                ou utilize nossos canais diretos.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', marginTop: '30px', justifyContent: 'center' }}>
                
                
                <div style={{ minWidth: '280px' }}>
                    <h3>Informações de Contato com a Empresa</h3>
                    <p><strong>Email:</strong> contato@techsolutions.com</p>
                    <p><strong>Telefone:</strong> (21) 0000-0000</p>
                    <p><strong>Endereço:</strong> Avenida Império das Rosas, 62</p>
                </div>

                
                <form onSubmit={enviarFormulario} className="form" style={{ flex: '1', maxWidth: '400px' }}>
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Seu Melhor Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Como podemos ajudar com sua tecnologia hoje?"
                        rows="5"
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                    />
                    <button type="submit">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contato