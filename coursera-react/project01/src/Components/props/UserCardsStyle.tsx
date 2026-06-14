import React from 'react';

type UserCardProps = {
  name: string;
  avatar: string;
  email: string;
};

const UserCardStyle: React.FC<UserCardProps> = ({ name, avatar, email }) => {
  // Inline styles defined as a TypeScript object
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    alignSelf: 'center'
  };

  const imageStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '12px'
  };

  return (
    <>
      <h2>Props Passing - Conditional Rendering Example</h2>
      <div style={cardStyle}>
        <img src={avatar} alt={name} style={imageStyle} />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </>
  );
};

export default UserCardStyle;