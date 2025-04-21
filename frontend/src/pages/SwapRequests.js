import React, { useState } from "react";
import "../css/SwapRequests.css";

const mockRequests = [
  { id: 1, from: "Alice", skill: "Data Science", status: "incoming" },
  { id: 2, to: "Bob", skill: "Photography", status: "outgoing" },
];

const SwapRequests = () => {
  const [requests, setRequests] = useState(mockRequests);

  const handleAction = (id, action) => {
    if (action === "accept") {
      alert("Swap Accepted!");
    } else if (action === "decline") {
      alert("Swap Declined!");
    } else {
      alert("Opening chat...");
    }

    setRequests(prev => prev.filter(req => req.id !== id));
  };

  return (
    <div className="swap-requests">
      <h2>Swap Requests</h2>
      <ul>
        {requests.map(req => (
          <li key={req.id} className="request-card">
            <p>
              {req.status === "incoming" 
                ? `${req.from} wants to swap for ${req.skill}` 
                : `You requested to swap with ${req.to} for ${req.skill}`}
            </p>
            <div className="actions">
              {req.status === "incoming" ? (
                <>
                  <button onClick={() => handleAction(req.id, "accept")}>Accept</button>
                  <button onClick={() => handleAction(req.id, "decline")}>Decline</button>
                </>
              ) : null}
              <button onClick={() => handleAction(req.id, "chat")}>Chat</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwapRequests;
