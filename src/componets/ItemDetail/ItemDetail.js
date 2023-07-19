import './ItemDetail.css';
import ItemCountSelector from '../ItemCountSelector/ItemCountSelector';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {
  return (
    <div className="filteredItem">
      <div className="itemImg">
        <img src={data.image} alt="data-item" width={'100%'} height={'100%'} />
      </div>
      <div className="dataContainer">
        <p className="title">{data.title}</p>
        <ItemCountSelector data={data} />
        <Link className="link" to={`/item/${data.id}`}>
          <button className="button">Ver Mas</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
