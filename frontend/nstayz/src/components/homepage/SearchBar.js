import React, { useState } from "react";
import "./serch.css";

function AdultCounterCard() {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);

  const incrementAdults = () => {
    if (adultsCount < 10) {
      setAdultsCount(adultsCount + 1);
    }
  };

  const decrementAdults = () => {
    if (adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const incrementChildren = () => {
    if (childrenCount < 10) {
      setChildrenCount(childrenCount + 1);
    }
  };

  const decrementChildren = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  const incrementInfants = () => {
    if (infantsCount < 10) {
      setInfantsCount(infantsCount + 1);
    }
  };

  const decrementInfants = () => {
    if (infantsCount > 0) {
      setInfantsCount(infantsCount - 1);
    }
  };

  const incrementPets = () => {
    if (petsCount < 10) {
      setPetsCount(petsCount + 1);
    }
  };

  const decrementPets = () => {
    if (petsCount > 0) {
      setPetsCount(petsCount - 1);
    }
  };

  return (
    <div class="card-container">
      <div className="card">
        <div className="card-adults">
          <h2>Adults</h2>
          <h5>Ages 13 or Above</h5>
          <div className="button-neg-adults">
            <button onClick={decrementAdults} className="neg-button">
              -
            </button>
          </div>
          <span>{adultsCount}</span>
          <div className="button-plus-adults">
            <button onClick={incrementAdults} className="plus-button">
              +
            </button>
          </div>
        </div>

        <div className="card-children">
          <h2>Children</h2>
          <h5>Ages 2–12</h5>
          <div className="button-neg-children">
            <button onClick={decrementChildren} className="neg-button">
              -
            </button>
          </div>
          <span>{childrenCount}</span>
          <div className="button-plus-children">
            <button onClick={incrementChildren} className="plus-button">
              +
            </button>
          </div>
        </div>

        <div className="card-infants">
          <h2>Infants</h2>
          <h5>Under 2</h5>
          <div className="button-neg-infants">
            <button onClick={decrementInfants} className="neg-button">
              -
            </button>
          </div>
          <span>{infantsCount}</span>
          <div className="button-plus-infants">
            <button onClick={incrementInfants} className="plus-button">
              +
            </button>
          </div>
        </div>

        <div className="card-pets">
          <h2>Pets</h2>
          <h5>Bringing a service animal?</h5>
          <div className="button-neg-pets">
            <button onClick={decrementPets} className="neg-button">
              -
            </button>
          </div>
          <span>{petsCount}</span>
          <div className="button-plus-pets">
            <button onClick={incrementPets} className="plus-button">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdultCounterCard;
