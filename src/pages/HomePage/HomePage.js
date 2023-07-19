import Header from '../../componets/Header/Header';
import SeasonContainer from '../../componets/SeasonContainer/SeasonContainer';
import CarouselGroup from '../../componets/CarouselGroup/CarouselGroup';
import HomeProductItem from '../../componets/HomeProductItem/HomeProductItem';
import OrderConfirmItem from '../../componets/OrderConfirmItem/OrderConfirmItem';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './HomePage.css';

const HomePage = () => {
  const { datos, category, isOrderIdAviable } = useContext(ProductsContext);

  const manData = datos.filter(data => {
    return data.category === category[0].name;
  });

  const womanData = datos.filter(data => {
    return data.category === category[3].name;
  });

  const manCarts = manData?.map(dato => {
    return <HomeProductItem data={dato} />;
  });

  const womanCarts = womanData?.map(dato => {
    return <HomeProductItem data={dato} />;
  });

  return (
    <div className="homePage">
      <Header />
      <SeasonContainer />
      <div className="espCarts">
        <p className="title">women clothing</p>
        <CarouselGroup cards={womanCarts} />
      </div>
      <div className="espCarts">
        <p className="title">men clothing</p>
        <CarouselGroup cards={manCarts} />
      </div>
      {isOrderIdAviable && <OrderConfirmItem />}
    </div>
  );
};

export default HomePage;
