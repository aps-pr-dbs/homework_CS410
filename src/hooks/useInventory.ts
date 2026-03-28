import { useState } from 'react';
import type { Product } from '../types';

export const useInventory = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (name: string, price: number, quantity: number) => {
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      quantity,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + delta) }
          : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return {
    products,
    addProduct,
    updateQuantity,
    deleteProduct,
  };
};