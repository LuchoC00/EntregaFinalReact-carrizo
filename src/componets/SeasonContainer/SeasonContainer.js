import SeasonOffers from '../SeasonOffers/SeasonOffers';
import Carousel from '../Carousel/Carousel';
import './SeasonContainer.css';

const SeasonContainer = () => {
  return (
    <div className="seasonContainer">
      <div className="seasonOffersContainer">
        <SeasonOffers />
      </div>
      <div className="newSeasons">
        <Carousel height="20rem" />
      </div>
    </div>
  );
};

export default SeasonContainer;
