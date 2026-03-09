function Card({ titulo, texto, imagem }) {
    return (
        <div className="card">
            <img src={imagem} alt={titulo} />
            <div className="card-body">
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default Card;