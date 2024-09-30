import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';  
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { email, logout } = useContext(UserContext);  
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();  
    navigate('/login'); 
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-4">Perfil del Usuario</h2>
      <p className="mb-4">Email: <strong>{email}</strong></p>  {/* Mostrar el email del usuario autenticado */}
      <button className="btn btn-danger btn-lg" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
