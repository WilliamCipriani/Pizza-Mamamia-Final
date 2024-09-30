import React, { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import PizzaContext from '../context/PizzaContext';  

const Home = () => {
  const { pizzas, loading, error } = useContext(PizzaContext);  

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))}
    </div>
  );
};

export default Home;
