import { useParams } from 'react-router-dom';
import Header from '../../componets/Header/Header';
import { useEffect, useState } from 'react';
import ItemDetail from '../../componets/ItemDetail/ItemDetail';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const DetailPage = () => {
  const id = useParams().itemId;
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async productId => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.exists() ? { ...docSnap.data(), id } : null);
    };

    getProduct();
  }, [id]);

  return (
    <div className="detailPage">
      <Header />
      {product && <ItemDetail data={product} />}
    </div>
  );
};

export default DetailPage;
