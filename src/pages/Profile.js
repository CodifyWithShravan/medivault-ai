import React from "react";

function Profile() {
  const user = {
    name: "Kavya Suma",
    phone: "9876543210",
    email: "kavya@gmail.com",
  };

  return (
    <div className="profile-page">
      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        className="profile-pic"
      />
      <h2>{user.name}</h2>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>

      <button
        onClick={() => alert("QR Generated (feature coming soon!)")}
        className="qr-btn"
      >
        Generate QR
      </button>
    </div>
  );
}

export default Profile;
