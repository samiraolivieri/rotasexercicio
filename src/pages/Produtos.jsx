import produtos from "../data/produtos.json"
import Card from "../components/Card"

function Produtos() {
    return (
        <div className="container">
            <h1>Nossos Produtos</h1>

            <p>
                A nossa empresa é especializada no fornecimento de <strong>soluções tecnológicas de ponta</strong>.
                Trabalhamos com uma vasta linha de equipamentos de TI e Informática, selecionados para
                garantir a máxima produtividade e segurança digital para o seu negócio ou home office.
            </p>

            <p>
                Desde infraestrutura de rede robusta até periféricos de alto desempenho, nosso catálogo
                abrange as marcas mais confiáveis do mercado global, focando sempre em inovação e
                durabilidade.
            </p>

            <h3>Confira nosso catálogo completo:</h3>

            <div className="grid">
                {produtos.map(produto => (
                    <Card
                        key={produto.id}
                        titulo={produto.nome}
                        texto={produto.descricao}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </div>
    )
}

export default Produtos