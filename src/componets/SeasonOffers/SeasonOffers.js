import Carousel from '../Carousel/Carousel';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

const SeasonOffers = () => {
  const { cartas } = useContext(ProductsContext);
  return (
    <div className="seasonOffers">
      <Carousel cards={cartas} height="20rem" />
    </div>
  );
};

export default SeasonOffers;
