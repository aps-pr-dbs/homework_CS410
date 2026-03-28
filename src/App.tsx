// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useInventory } from './hooks/useInventory';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

function App() {
  const { products, addProduct, updateQuantity, deleteProduct } = useInventory();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard products={products} />} />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              onAddProduct={addProduct}
              onUpdateQuantity={updateQuantity}
              onDeleteProduct={deleteProduct}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;