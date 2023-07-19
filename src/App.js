import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { ProductsProvier } from './contexts/ProductsContext';

const App = () => {
  return (
    <div className="App">
      <ProductsProvier>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/category" element={<CategoryPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/item/:itemId" element={<DetailPage />} />
            <Route exact path="/item" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </ProductsProvier>
    </div>
  );
};

export default App;
