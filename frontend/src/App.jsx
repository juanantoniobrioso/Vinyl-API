import { useState, useEffect } from 'react';

function App() {
  const [vinilos, setVinilos] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState('');
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const generos = ['Rock', 'Soul', 'R&B', 'Blues', 'Jazz', 'Country'];

  useEffect(() => {
    const obtenerVinilos = async () => {
      setCargando(true);
      setError(null);
      
      let url = 'http://localhost:3000/api/vinilos';
      if (generoSeleccionado) {
        url += `?genero=${encodeURIComponent(generoSeleccionado)}`;
      }

      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`Error en la petición: ${respuesta.status}`);
        }
      
        const datos = await respuesta.json();
      
        setVinilos(datos); 

      } catch (err) {
        console.error("Error al capturar los vinilos:", err);
        setError("No se pudo conectar con el catálogo de vinilos. Por favor, verifica que el servidor backend esté encendido.");
      } finally {
        setCargando(false);
      }
    };

    obtenerVinilos();
  }, [generoSeleccionado]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tienda de Vinilos Clásicos</h1>
        <p>Catálogo exclusivo para coleccionistas de buena música.</p>
      </header>

      {/* SECTOR DE GÉNEROS */}
      <section className="filter-section">
        <label htmlFor="genero-select">Filtrar por género musical:</label>
        <select 
          id="genero-select"
          value={generoSeleccionado} 
          onChange={(e) => setGeneroSeleccionado(e.target.value)}
        >
          <option value="">Todos los géneros</option>
          {generos.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </section>

      {/* CONTROL DE ESTADOS */}
      {cargando && <p className="status-message">Cargando catálogo de vinilos...</p>}
      
      {error && (
        <div className="error-container">
          <strong>¡Vaya!:</strong> {error}
        </div>
      )}

      {/* ÁREA PRINCIPAL: TARJETAS CON CLASES CSS */}
      {!cargando && !error && (
        <main className="vinyl-grid">
          {vinilos.length === 0 ? (
            <p className="status-message">No se encontraron vinilos para este género.</p>
          ) : (
            vinilos.map((vinilo) => (
              <div key={vinilo.id} className="vinyl-card">
                <img 
                  src={vinilo.portada_url} 
                  alt={`Portada de ${vinilo.titulo}`} 
                  className="vinyl-cover"
                />
                <div className="vinyl-info">
                  <h3 className="vinyl-title">{vinilo.titulo}</h3>
                  <p className="vinyl-artist">{vinilo.artista}</p>
                  <div className="vinyl-meta">
                    <span className="badge-genre">{vinilo.genero}</span>
                    <span className="vinyl-year">{vinilo.anio}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </main>
      )}
    </div>
  );
}

export default App;