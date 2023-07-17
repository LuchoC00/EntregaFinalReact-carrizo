import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const id = useParams();
  return <div className="detailPage"></div>;
};

export default DetailPage;
