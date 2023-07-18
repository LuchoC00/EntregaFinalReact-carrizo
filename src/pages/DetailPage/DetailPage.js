import { useParams } from 'react-router-dom';
import Header from '../../componets/Header/Header';

const DetailPage = () => {
  const id = useParams();
  return (
    <div className="detailPage">
      <Header />
    </div>
  );
};

export default DetailPage;
