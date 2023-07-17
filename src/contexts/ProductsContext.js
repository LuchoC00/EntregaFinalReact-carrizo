import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvier = ({ children }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setDatos(json));
  }, []);
  const cartas = datos.map(dato => {
    return (
      <div
        key={dato.id}
        style={{
          backgroundImage: `url(${dato.image})`,
          backgroundSize: '100% 100%',
          width: '100%',
          height: '100%'
        }}
      ></div>
    );
  });

  return (
    <ProductsContext.Provider value={{ datos, cartas }}>
      {children}
    </ProductsContext.Provider>
  );
};
