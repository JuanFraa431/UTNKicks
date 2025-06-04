import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';  

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="title">¡Bienvenido a UTNKicks!</h1>
            <p className="description">
                Participá en el prode con tus amigos, completá tus pronósticos, seguí los resultados en vivo y subí en la tabla de posiciones.
            </p>

            <div className="buttonContainer">
                <button className="button" onClick={() => navigate('/pronosticos')}>
                    Crear Pronósticos
                </button>
                <button className="button" onClick={() => navigate('/tabla')}>
                    Ver Tabla
                </button>
                <button className="button" onClick={() => navigate('/resultados')}>
                    Resultados
                </button>
            </div>
        </div>
    );
};

export default Home;
