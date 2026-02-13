import { useParams, Link } from "react-router-dom";
import { jugadores } from "../data/jugadores";

function Detalle() {
    const { id } = useParams();
    const jugador = jugadores.find((j) => j.id === parseInt(id));

    if (!jugador) {
        return <h2>Jugador no encontrado</h2>;
    }

    return (
        <div className="detalle">
            <h2>{jugador.nombre}</h2>
            <img src={jugador.imagen} alt={jugador.nombre} />

            <p><strong>Número:</strong> {jugador.numero}</p>
            <p><strong>Posición:</strong> {jugador.posicion}</p>
            <p><strong>Club actual:</strong> {jugador.club}</p>
            <p><strong>Habilidades:</strong> {jugador.habilidades}</p>
            <Link to="/">
                <button className="boton">Volver</button>
            </Link>
        </div>
    );
}

export default Detalle;
