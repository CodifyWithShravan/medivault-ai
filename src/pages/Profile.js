import React from "react";
import "./Profile.css";
import { FaQrcode } from "react-icons/fa";

function Profile() {
  const user = {
    name: "Kavya Suma",
    email: "vookakavyasuma4@gmail.com",
    phone: "+91 9876543210",
    address: "Hyderabad, India",
  };

  const handleGenerateQR = () => {
    alert("QR Code generated for your MediVault profile!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-header">My Profile</h2>

        <div className="profile-details">
          <div className="profile-pic">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt="User"
              className="profile-picture"
            />
          </div>

          <div className="info">
            <h3 className="profile-name">{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        </div>

        <button className="qr-button" onClick={handleGenerateQR}>
          <FaQrcode className="qr-icon" /> Generate QR
        </button>
      </div>
    </div>
  );
}

export default Profile;
