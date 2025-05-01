import React, { useState } from "react";
import "../css/SwapConfirmation.css";

const SwapConfirmation = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const submitConfirmation = () => {
    setConfirmed(true);
    alert("Swap confirmed!");
  };

  const submitReview = () => {
    alert(`Rating: ${rating} stars\nReview: ${review}`);
  };

  return (
    <div className="swap-confirmation">
      <h2>Confirm Swap Completion</h2>
      {!confirmed ? (
        <button onClick={submitConfirmation}>Confirm Completed Swap</button>
      ) : (
        <>
          <h3>Leave a Review</h3>
          <label>Rate Your Partner:
            <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
          </label>
          <textarea
            placeholder="Write your feedback here..."
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          <button onClick={submitReview}>Submit Review</button>
        </>
      )}
    </div>
  );
};

export default SwapConfirmation;
