import React from 'react';
import { useUser } from './UserContext';
import { useTheme } from './ThemeContext';

function Navbar() {
  // PROPS YOK! Verileri doğrudan merkezden çekiyoruz
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '15px 30px', 
      backgroundColor: theme === 'light' ? '#ffffff' : '#2d3436',
      color: theme === 'light' ? '#2d3436' : '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>Akıllı Dashboard</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={toggleTheme} style={{ padding: '8px', cursor: 'pointer' }}>
          {theme === 'light' ? '🌙 Gece Modu' : '☀️ Gündüz Modu'}
        </button>
        <span style={{ fontWeight: 'bold' }}>{user.name} ({user.role})</span>
        <img 
          src={user.avatar} 
          alt="Profil" 
          style={{ width: '40px', height: '40px', borderRadius: '50%' }} 
        />
      </div>
    </nav>
  );
}

export default Navbar;