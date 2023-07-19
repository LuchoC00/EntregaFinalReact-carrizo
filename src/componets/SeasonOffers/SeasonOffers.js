import Carousel from '../Carousel/Carousel';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import HomeProductItem from '../HomeProductItem/HomeProductItem';

const SeasonOffers = () => {
  const { datos } = useContext(ProductsContext);
  const cards = datos.map(data => {
    return <HomeProductItem data={data} isTop={true} />;
  });
  return (
    <div className="seasonOffers">
      <Carousel cards={cards} height="20rem" />
    </div>
  );
};

export default SeasonOffers;
