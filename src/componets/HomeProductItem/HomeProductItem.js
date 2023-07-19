import { Link } from 'react-router-dom';
import './HomeProductItem.css';

const HomeProductItem = ({ data, isTop = false }) => {
  return (
    <div className="homeProductItem">
      <div
        className="container"
        key={data.id}
        style={{
          backgroundImage: `url(${data.image})`,
          alignItems: `${isTop ? 'start' : 'end'}`
        }}
      >
        <Link to={`/item/${data.id}`}>
          <button className="button">Ver Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProductItem;
