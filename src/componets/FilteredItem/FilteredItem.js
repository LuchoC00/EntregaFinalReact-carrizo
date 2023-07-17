import ItemCountSelector from '../ItemCountSelector/ItemCountSelector';
import ToDetailButton from '../ToDetailButton/ToDetailButton';

const FilteredItem = ({ data }) => {
  return (
    <div className="filteredItem">
      <div className="itemImg">
        <img
          src={data.image}
          alt="data-item"
          style={{ width: '30%', height: '100px' }}
        />
      </div>
      <p>{data.title}</p>
      <ItemCountSelector maxCount={5} />
      <ToDetailButton data={data} />
    </div>
  );
};

export default FilteredItem;
