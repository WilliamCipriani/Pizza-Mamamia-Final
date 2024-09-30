import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-4">Página No Encontrada</h2>
        <p className="mb-4">Lo sentimos, pero la página que buscas no existe o ha sido movida.</p>
        <Link to="/">
          <button className="btn btn-primary btn-lg">Volver a la Página Principal</button>
        </Link>
      </div>
    );
  };
  
  export default NotFound;