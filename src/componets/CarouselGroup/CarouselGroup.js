import { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './CarouselGroup.css';

const CarouselGroup = ({
  cards = [],
  cardsDisplayCont = 5,
  cardGap = 5,
  isUnlockFreeMove = false
}) => {
  useEffect(() => {
    let cardsCont =
      cardsDisplayCont > cards.length ? cards.length : cardsDisplayCont;
    setCardWidth(Math.floor(100 / cardsCont - cardGap));
    setLastPos(cardsCont);
  }, [cards]);

  const handleOfClickRightButton = () => {
    if (!isMoved || isUnlockFreeMove) {
      setMoveValue(value => {
        return -cardWidth - cardGap + value;
      });
      setFirstPos(value => value + 1);
      setLastPos(value => value + 1);
      setIsMoved(true);
      setTimeout(() => {
        setIsMoved(false);
      }, 400);
    }
  };

  const handleOfClickLeftButton = () => {
    if (!isMoved || isUnlockFreeMove) {
      setMoveValue(value => {
        return cardWidth + cardGap + value;
      });
      setFirstPos(value => value - 1);
      setLastPos(value => value - 1);
      setIsMoved(true);

      setTimeout(() => {
        setIsMoved(false);
      }, 400);
    }
  };

  const [cardWidth, setCardWidth] = useState(
    Math.floor(100 / cardsDisplayCont)
  );
  const [moveValue, setMoveValue] = useState(Math.floor(cardGap / 2));

  const [firstPos, setFirstPos] = useState(0);
  const [lastPos, setLastPos] = useState(Math.floor(100 / cardsDisplayCont));
  const [isMoved, setIsMoved] = useState(false);

  return (
    <div className="carouselGroup">
      <button
        className="leftCarouselButton"
        onClick={handleOfClickLeftButton}
        disabled={firstPos <= 0}
      >
        <ArrowBackIosNewIcon />
      </button>
      {cards.length > 0 && (
        <div className="cardsGroupContainer">
          {cards.map((card, index) => {
            return (
              <div
                className="cardContainer"
                key={`card:${index}`}
                style={{
                  width: `${cardWidth}%`,
                  height: `${100}px`,
                  left: `${moveValue + (cardWidth + cardGap) * index}%`
                }}
              >
                {card}
              </div>
            );
          })}
        </div>
      )}

      <button
        className="rigthCarouselButton"
        onClick={handleOfClickRightButton}
        disabled={lastPos >= cards.length}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default CarouselGroup;
