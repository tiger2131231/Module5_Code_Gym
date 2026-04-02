import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem', marginBottom: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ margin: 0 }}>Football Manager</h2>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/player" style={{ color: 'white', textDecoration: 'none' }}>Players</Link></li>
          <li><Link to="/player/add" style={{ color: 'white', textDecoration: 'none' }}>Add Player</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
