import React, { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, totalAmount } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false); 

  const handleCheckout = async () => {
    setLoading(true); 
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: cartItems })
      });
      if (response.ok) {
        alert('Compra realizada con éxito!');
      } else {
        alert('Error al realizar la compra');
      }
    } catch (error) {
      console.error('Error en checkout:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {cartItems.map((pizza) => (
            <div className="card shadow-sm p-3 mb-5 bg-white rounded" 
                style={{ width: '18rem', margin: '10px' }} 
                key={pizza.id}>
              <img className="card-img-top" src={pizza.img} alt={pizza.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <button 
                    className="btn btn-outline-primary" 
                    style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }} 
                    onClick={() => removeItemFromCart(pizza.id)}
                  >
                    -
                  </button>
                  <span className="mx-3 fs-4">{pizza.quantity}</span>
                  <button 
                    className="btn btn-outline-primary" 
                    style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }} 
                    onClick={() => addItemToCart(pizza)}
                  >
                    +
                  </button>
                </div>
                <p className="card-text text-muted">Subtotal: ${(pizza.price * pizza.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center mt-4 p-4 border-top">
        <h3 className="me-3">Total: ${totalAmount.toLocaleString()}</h3>
        <button 
          className="btn btn-success btn-lg" 
          onClick={handleCheckout}
          disabled={!token || loading} 
        >
          {loading ? "Procesando..." : (token ? "Pagar" : "Inicia sesión para pagar")}
        </button>
      </div>
    </div>
  );
};

export default Cart;
