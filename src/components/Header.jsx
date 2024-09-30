import headerImage from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <header className="text-center bg-dark text-white py-5" style={{ 
      backgroundImage: `url(${headerImage})`, 
      backgroundSize: 'cover',
      backgroundBlendMode: 'overlay',
      opacity: 0.9
    }}>
      <div className="container">
        <h1 className='text-'>¡Pizzería Mamma Mia!</h1>
        <p>¡Las mejores pizzas de la ciudad al mejor precio!</p>
        <hr />
      </div>
    </header>
  );
};

export default Header;
