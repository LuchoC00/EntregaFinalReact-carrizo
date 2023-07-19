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

  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const q = query(collection(db, 'users'));

    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach(doc => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    setUsers(docs);
  };

  const [acount, setAcount] = useState(null);
  const createUser = async userData => {
    const docRef = await addDoc(collection(db, 'users'), {
      name: userData.name,
      email: userData.email
    });
    setAcount({
      name: userData.name,
      email: userData.email
    });
  };

  useEffect(() => {
    getAllCategory();
    getAllProducts();
    getAllUsers();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        datos,
        cartas,
        category,
        cart,
        users,
        addToCart,
        createUser,
        setAcount
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
