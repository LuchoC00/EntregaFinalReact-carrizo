import { useParams } from 'react-router-dom';
import Header from '../../componets/Header/Header';
import { useEffect, useState } from 'react';
import ItemDetail from '../../componets/ItemDetail/ItemDetail';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const DetailPage = () => {
  const id = useParams().itemId;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, 'products'), id);
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setProduct(null);
      } else {
        const doc = querySnapshot.docs[0];

        setProduct({ id: doc.id, ...doc.data() });
      }
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
