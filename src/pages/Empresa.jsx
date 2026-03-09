function Empresa() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Nossa História</h1>


            <img
                src="https://bolddesignset.com/wp-content/uploads/2024/03/ALX-3.jpg"
                alt="Escritório TechSolutions"
                style={{ width: '60%', borderRadius: '8px', display: 'block', margin: '0 auto 20px' }}
            />

            <p>
                Fundada em 2013, nossa empresa nasceu da paixão por tecnologia e da necessidade de
                oferecer soluções de hardware e infraestrutura de confiança para o mercado brasileiro.
                O que começou como uma pequena assistência técnica evoluiu para uma das principais
                distribuidoras de equipamentos de TI, acompanhando de perto a revolução digital e
                a transição para o trabalho híbrido e em nuvem.
            </p>

            <h2 style={{ marginTop: '30px' }}>Missão e Objetivos</h2>
            <p>
                Nossa missão é <strong>democratizar o acesso à tecnologia de ponta</strong>, fornecendo
                ferramentas que potencializem o crescimento de empresas e profissionais autônomos.
                Buscamos ser referência em qualidade e suporte técnico, garantindo que nossos clientes
                tenham sempre o melhor desempenho em suas atividades digitais.
            </p>

            <h2 style={{ marginTop: '30px' }}>Área de Atuação</h2>
            <p>
                Atuamos em todo o território nacional, atendendo desde entusiastas de tecnologia e
                gamers até grandes centros de dados e escritórios corporativos. Nossa expertise
                envolve a consultoria na escolha de hardware, montagem de servidores e fornecimento
                de periféricos ergonômicos de alta performance.
            </p>
        </div>
    );
}

export default Empresa;