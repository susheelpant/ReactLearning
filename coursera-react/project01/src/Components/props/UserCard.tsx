import React from 'react';

type UserCardProps = {
  name: string;
  avatar: string;
  email?: string; // optional prop
};

// default value provided for email in parameter passing
const UserCard: React.FC<UserCardProps> = ({ name, avatar, email = "noemail@example.com" }) => {
  return (
    <div className="user-card">
      <h2>Props passing with Nullable / Default parameter Example</h2>
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;