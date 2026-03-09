import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselHome() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
            <div>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop" alt="Cibersegurança" />
                <p className="legend">Segurança Digital Avançada</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop" alt="Hardware" />
                <p className="legend">Os Melhores Componentes do Mercado</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop" alt="Redes" />
                <p className="legend">Infraestrutura de Redes e Servidores</p>
            </div>
        </Carousel>
    );
}

export default CarouselHome;