import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../context/CartContext'; 

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { addItemToCart } = useContext(CartContext);  

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`); 
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  const handleAddToCart = () => {
    addItemToCart(pizza); 
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '18rem', margin: '10px' }} key={pizza.id}>
          <img className="card-img-top" src={pizza.img} alt={pizza.name} />
          <div className="card-body text-center">
            <h2 className="card-title">{pizza.name}</h2>
            <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
            <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
            <p>{pizza.description}</p>
          </div>
          <button onClick={handleAddToCart}>Añadir al carrito</button> 
        </div>
      </div>
    </div>
  );
};

export default Pizza;
