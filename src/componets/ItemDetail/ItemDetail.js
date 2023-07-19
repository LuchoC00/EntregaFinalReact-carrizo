import './ItemDetail.css';
import ItemCountSelector from '../ItemCountSelector/ItemCountSelector';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

const ItemDetail = ({ data }) => {
  return (
    <div className="itemDetail">
      <div className="itemImg">
        <img src={data.image} alt="data-item" width={'100%'} height={'100%'} />
      </div>
      <div className="dataContainer">
        <p className="category">{data.category}</p>
        <p className="title">{data.title}</p>
        <div className="subtitles">
          <div className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={data.rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="stock">STOCK: {data.stock} unidades</div>
        </div>
        <div className="selector">
          <div className="price">$ {data.price}</div>
          <ItemCountSelector data={data} />
        </div>

        <p className="desciption">
          {data.description.length > 500
            ? data.description.slice(0, 200) + '...'
            : data.description}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
