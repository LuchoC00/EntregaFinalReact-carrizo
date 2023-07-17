import Header from '../../componets/Header/Header';
import SeasonContainer from '../../componets/SeasonContainer/SeasonContainer';
import CarouselGroup from '../../componets/CarouselGroup/CarouselGroup';
import { useState, useEffect } from 'react';

const HomePage = () => {
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
    <div className="homePage">
      <Header />
      <SeasonContainer />
      <CarouselGroup cards={cartas} />
      <CarouselGroup cards={cartas} isUnlockFreeMove={true} />
    </div>
  );
};

export default HomePage;
