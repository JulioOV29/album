import { Link } from "react-router-dom";
import { jugadores } from "../data/jugadores";

function Home() {
    return (
        <div className="contenedor">
            <h1>Álbum Selección Colombia</h1>

            <div className="galeria">
                {jugadores.map((jugador) => (
                    <div className="card" key={jugador.id}>
                        <img src={jugador.imagen} alt={jugador.nombre} />
                        <h3>{jugador.nombre}</h3>
                        <p>{jugador.posicion}</p>

                        <Link to={`/detalle/${jugador.id}`}>
                            <button className="boton">Ver detalle</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
