import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Cart from "./pages/Cart";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound'; 
import Profile from './components/Profile';

import { CartProvider } from './context/CartContext'; 
import { PizzaProvider } from './context/PizzaContext'; 
import { UserProvider, UserContext } from './context/UserContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 
function App() {
  return (
    <UserProvider> 
      <PizzaProvider>  
        <CartProvider> 
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/register" element={<RegisterPage />} /> 
              <Route path="/login" element={<LoginPage />} /> 
              <Route path="/cart" element={<Cart />} /> 
              
              <Route path="/pizza/:id" element={<Pizza />} />

              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } /> 

              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App;
