import React from 'react';
import './App.css';
import fondo from './fondo1.jpg';

function App() {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${fondo})` }}>
      <header className="app-header">
        <div className="header-overlay">
          <div className="header-content">
            {/* Logo de la escuela en la izquierda */}
            <div className="school-logo">
              <img src="/utvt2.png" alt="Logo UTVT" />
            </div>

            {/* Texto del header */}
            <div className="header-text">
              <h1>Mercadito UTVT</h1>
              <p>La aplicación para estudiantes para comprar y vender productos</p>
            </div>

            {/* Logo de la aplicación en la derecha */}
            <div className="app-logo">
              <img src="/mercaditoutvt.png" alt="Logo Mercadito UTVT" />
            </div>
          </div>
        </div>
      </header>

      <section className="features-section">
        <h2>Características de la App</h2>
        <ul>
          <li>🔍 Búsqueda de productos y servicios en la comunidad estudiantil.</li>
          <li>📍 Geolocalización para encontrar ofertas cercanas.</li>
          <li>💬 Chat en tiempo real con compradores y vendedores.</li>
          <li>👤 Perfiles personalizados de usuarios.</li>
        </ul>
      </section>

      <section className="download-section">
        <h2>Descarga la App</h2>
        <p>Haz clic en el botón de abajo para descargar el APK.</p>
        <a
          href="https://mercadito-utvt-bucket.s3.us-east-1.amazonaws.com/mercadito-utvt.apk"
          download="MercaditoUTVT.apk"
          className="download-button"
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad
        >
          Descargar APK
        </a>
      </section>

      <footer className="app-footer">
        <p>© 2024 Mercadito UTVT. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
