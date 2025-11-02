import React from "react";

function Activity() {
  const activities = [
    { hospital: "Apollo Hospital", treatment: "Fracture checkup" },
    { hospital: "AIIMS Delhi", treatment: "MRI Scan" },
  ];

  return (
    <div className="activity-page">
      <h2>Hospital Visits & Treatments</h2>
      <ul>
        {activities.map((a, i) => (
          <li key={i}>
            <strong>{a.hospital}</strong> — {a.treatment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activity;
