import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // Aktif linkin stilini belirleyen yardımcı fonksiyon
  const getNavLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? '#ff4757' : '#2f3542',
      fontWeight: isActive ? 'bold' : 'normal',
      marginRight: '15px'
    };
  };

  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <NavLink to="/" style={getNavLinkStyle}>Ana Sayfa</NavLink>
      <NavLink to="/filmler" style={getNavLinkStyle}>Filmler</NavLink>
    </nav>
  );
}

export default Navbar;