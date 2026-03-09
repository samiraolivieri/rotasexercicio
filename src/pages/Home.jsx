import CarouselHome from "../components/Carousel"
import Card from "../components/Card"

function Home() {
    return (
        <div className="container">

            <h1 style={{ textAlign: 'center' }}>Bem-vindo(a) à TechSolutions!</h1>

            <p style={{ textAlign: 'center' }}>Seja muito bem-vindo(a) ao nosso portal. É um prazer receber sua visita!</p>

            <p style={{ textAlign: 'center' }}>
                Este site foi criado para apresentar o que há de melhor em tecnologia e informática.
                Aqui você encontrará informações sobre nossos produtos de alto desempenho,
                conhecerá nossa história e terá canais diretos para entrar em contato conosco.
            </p>


            <CarouselHome />

            <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Nossas Soluções em TI</h2>

            <p style={{ textAlign: 'center' }}>Explore abaixo nossas principais frentes de atuação em hardware e infraestrutura.</p>


            <div className="grid">
                <Card titulo="Montagem de Workstations" texto="PCs de alto desempenho para engenharia e design." imagem="https://tse1.mm.bing.net/th/id/OIP.OWOnPK-YqcIy-x-PtPeF3wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" />
                <Card titulo="Consultoria de Redes" texto="Planejamento de infraestrutura cabeada e Wi-Fi 6." imagem="https://static.wixstatic.com/media/944c23_267921255ced49a38eaccfe13a63b0b3~mv2.jpg/v1/fill/w_2500,h_1666,al_c/944c23_267921255ced49a38eaccfe13a63b0b3~mv2.jpg" />
                <Card titulo="Segurança de Dados" texto="Implementação de backups e firewalls corporativos." imagem="https://www.ionsistemas.com.br/wp-content/uploads/2019/03/281077-como-garantir-a-seguranca-de-dados-na-internet-veja-essas-x-dicas.jpg" />
                <Card titulo="Suporte Remoto" texto="Assistência técnica ágil para empresas e home office." imagem="https://uploads-ssl.webflow.com/625eb96bbe84fc78dda003a5/627983095a4077f5fc93cd29_o-que-e-suporte-remoto-e-como-essa-ferramenta-visual-pode-melhorar-a-experiencia-do-cliente.jpg" />
                <Card titulo="Upgrade de Hardware" texto="Instalação de SSDs e memórias para ganho de performance." imagem="https://in-media.apjonlinecdn.com/magefan_blog/Actualizaci_n_de_hardware_en_laptop.jpg" />
                <Card titulo="Servidores Rack" texto="Venda e configuração de servidores para data centers." imagem="https://www.eabel.com/wp-content/uploads/2024/09/Close-up-of-blue-network-cables-in-a-server-rack-scaled.webp" />
                <Card titulo="Periféricos Gamer" texto="Os melhores teclados, mouses e headsets do mercado." imagem="https://th.bing.com/th/id/R.9a4354117d34e9f121b3044d566401ff?rik=C3QmOfX9QAFK8g&pid=ImgRaw&r=0" />
                <Card titulo="Licenciamento" texto="Venda de licenças oficiais de sistemas e antivírus." imagem="https://www.vilage.com.br/wp-content/uploads/2023/11/licenciamento-de-tecnologia.jpg" />
                <Card titulo="Manutenção Preventiva" texto="Limpeza e troca de pasta térmica para durabilidade." imagem="https://acertech.com.br/wp-content/uploads/2018/10/0215cybersecurity.jpg" />
                <Card titulo="Cloud Computing" texto="Migração de bancos de dados para a nuvem." imagem="https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/06/cloud-computing-concept-with-folders.jpg" />
                <Card titulo="Cabeamento Estruturado" texto="Organização de racks e passagens de cabos cat6." imagem="https://www.underti.com.br/wp-content/uploads/2015/08/Cabeamento-estruturado-com-certifica%C3%A7%C3%A3o-UNDER-TI.jpg" />
                <Card titulo="Monitoramento 24h" texto="Gestão de rede e tráfego para evitar quedas." imagem="https://th.bing.com/th/id/R.38d77cd6f94e46110aafa73900813050?rik=%2f0JRkdm%2bC1QyoQ&pid=ImgRaw&r=0" />
            </div>
        </div>
    )
}

export default Home