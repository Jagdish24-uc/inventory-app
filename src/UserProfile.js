// UserProfile.js
import React, { useState } from 'react';

const UserProfile = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleUpdateProfile = event => {
    event.preventDefault();
    // Add logic to update user profile (e.g., send updated data to the server)
    console.log('Profile updated:', { userName, userEmail });
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-3">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
