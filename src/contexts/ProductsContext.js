import { createContext, useState, useEffect } from 'react';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const ProductsContext = createContext();

export const ProductsProvier = ({ children }) => {
  const [datos, setDatos] = useState([]);

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

  //cart

  const [cart, setCart] = useState([
    {
      title: 'prueba',
      category: 'electronics',
      description: 'Este producto es utilizado para pruebas',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      offer: {
        name: 'prueba',
        type: 'discount',
        value: 100
      },
      price: 99,
      rating: 4.8,
      stock: 3
    }
  ]);

  const addToCart = data => {
    setCart(value => [...value, data]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  //firebase

  const [category, setCategory] = useState(null);

  const getAllCategory = async () => {
    const q = query(collection(db, 'category'));

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach(doc => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    setCategory(docs);
  };

  const getAllProducts = async () => {
    const q = query(collection(db, 'products'));

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach(doc => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    setDatos(docs);
  };

  useEffect(() => {
    getAllCategory();
    getAllProducts();
  }, []);

  const getCategory = async category => {
    const q = query(
      collection(db, 'category'),
      where('name', '==', `${category}`)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  };

  // todas las funciones que siguen no se ejecutan. Pero lo dejo para que se vea como lo hice
  const usarUnaVez = async () => {
    const docRef = await addDoc(collection(db, 'products'), {
      title: 'prueba',
      category: 'electronics',
      description: 'Este producto es utilizado para pruebas',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      offer: {
        name: 'prueba',
        type: 'discount',
        value: 100
      },
      price: 99,
      rating: 4.8,
      stock: 3
    });
  };

  const usarUnaVez2 = async () => {
    datos.forEach((dato, index) => {
      let actualizarDato = {
        title: dato.title,
        category: dato.category,
        description: dato.description,
        image: dato.image,
        price: dato.price,
        rating: dato.rating.rate,
        stock: dato.rating.count
      };
      if (index % 3 === 0) {
        actualizarDato.offer = {
          name: 'coldOffers',
          type: index % 2 === 0 ? 'discount' : 'percent',
          value: index % 2 === 0 ? 100 : 20
        };
      }
      addDoc(collection(db, 'products'), actualizarDato);
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        datos,
        cartas,
        category,
        cart,
        getCategory,
        addToCart,
        usarUnaVez,
        usarUnaVez2
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
