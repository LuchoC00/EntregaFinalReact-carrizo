import SeasonOffers from '../SeasonOffers/SeasonOffers';
import './SeasonContainer.css';

const SeasonContainer = () => {
  return (
    <div className="seasonContainer">
      <div className="seasonOffersContainer">
        <SeasonOffers />
      </div>
      <div className="newSeasons"></div>
    </div>
  );
};

export default SeasonContainer;
