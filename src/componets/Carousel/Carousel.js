import { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Carousel.css';

const Carousel = ({ cards = '', initialPos = 0 }) => {
  const checkNextPos = cardPos => {
    if (cardPos > cards.length - 1) {
      setNextPos(cards.length > 1 ? 0 : null);
    } else {
      setNextPos(cardPos);
    }
  };

  const checkPreviousPos = cardPos => {
    if (cardPos < 0) {
      setPreviousPos(cards.length > 1 ? cards.length - 1 : null);
    } else {
      setPreviousPos(cardPos);
    }
  };

  const moveLeft = () => {
    movedStyles('left');
    setTimeout(() => {
      currentPos < cards.length - 1 ? setCurrentPos(nextPos) : setCurrentPos(0);
      movedStyles('');
    }, 500);
  };

  const moveRight = () => {
    movedStyles('right');
    setTimeout(() => {
      0 < currentPos
        ? setCurrentPos(previousPos)
        : setCurrentPos(cards.length - 1);
      movedStyles('');
    }, 500);
  };

  const [isMoved, setIsMoved] = useState(false);
  const moveToPosition = pos => {
    if (!isMoved) {
      if (pos > currentPos) {
        movedStyles('left');
        checkNextPos(pos);
      } else if (pos < currentPos) {
        movedStyles('right');
        checkPreviousPos(pos);
      }
      setTimeout(() => {
        setCurrentPos(pos);
        movedStyles('');
      }, 500);
    }
  };

  const movedStyles = direction => {
    setIsMoved(true);
    if (direction === 'left') {
      setPreviousMovedStyle({ left: '-150%' });
      setCurrentMovedStyle({ left: '-50%' });
      setNextMovedStyle({ left: '50%' });
    } else if (direction === 'right') {
      setPreviousMovedStyle({ left: '50%' });
      setCurrentMovedStyle({ left: '150%' });
      setNextMovedStyle({ left: '250%' });
    } else if (direction === '') {
      setPreviousMovedStyle({ left: '-50%', transition: '0s' });
      setCurrentMovedStyle({ left: '50%', transition: '0s' });
      setNextMovedStyle({ left: '150%', transition: '0s' });
      setIsMoved(false);
    }
  };

  const handleOfClickRightButton = () => {
    if (!isMoved) {
      moveLeft();
    }
  };

  const handleOfClickLeftButton = () => {
    if (!isMoved) {
      moveRight();
    }
  };

  const [currentPos, setCurrentPos] = useState(initialPos);
  const [nextPos, setNextPos] = useState(null);
  const [previousPos, setPreviousPos] = useState(null);

  const [previousMovedStyle, setPreviousMovedStyle] = useState({
    left: '-50%'
  });
  const [currentMovedStyle, setCurrentMovedStyle] = useState({ left: '50%' });
  const [nextMovedStyle, setNextMovedStyle] = useState({ left: '150%' });

  useEffect(() => {
    checkNextPos(currentPos + 1);
    checkPreviousPos(currentPos - 1);
  }, [currentPos, cards]);

  return (
    <div className="carousel">
      <div className="background">
        <p>Wait a moment</p>
        <p>Items are loading</p>
      </div>
      {cards.length > 1 && (
        <button
          className="leftCarouselButton"
          onClick={handleOfClickLeftButton}
        >
          <ArrowBackIosNewIcon />
        </button>
      )}

      {cards.length > 1 && (
        <button
          className="rigthCarouselButton"
          onClick={handleOfClickRightButton}
        >
          <ArrowForwardIosIcon />
        </button>
      )}

      {cards.length > 1 && cards.length < 101 && (
        <div className="pointContainers">
          {cards.map((card, index) => {
            return (
              <button
                className={`point ${
                  index === currentPos && !isMoved ? 'pointSelected' : ''
                }`}
                key={`point:${index}`}
                onClick={() => moveToPosition(index)}
              ></button>
            );
          })}
        </div>
      )}
      {cards.length >= 101 && (
        <div className="pointContainers">
          <div className="pointPosition">{currentPos + 1}</div>
        </div>
      )}

      <div className="cardContainer" style={previousMovedStyle}>
        {cards[previousPos]}
      </div>
      <div className="cardContainer" style={currentMovedStyle}>
        {cards[currentPos]}
      </div>
      <div className="cardContainer" style={nextMovedStyle}>
        {cards[nextPos]}
      </div>
    </div>
  );
};

export default Carousel;
