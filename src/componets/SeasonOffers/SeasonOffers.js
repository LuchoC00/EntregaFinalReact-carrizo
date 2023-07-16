import Carousel from '../Carousel/Carousel';
import { useEffect, useState } from 'react';

const SeasonOffers = () => {
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
    <div className="seasonOffers">
      <Carousel cards={cartas} />
    </div>
  );
};

export default SeasonOffers;
