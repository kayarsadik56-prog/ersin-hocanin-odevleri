import React from 'react';
import { useUser } from './UserContext';
import { useTheme } from './ThemeContext';

function Sidebar() {
  const { user } = useUser();
  const { theme } = useTheme();

  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    padding: '20px',
    backgroundColor: theme === 'light' ? '#f5f6fa' : '#1e272e',
    color: theme === 'light' ? '#2f3640' : '#f5f6fa',
    borderRight: '1px solid #ccc'
  };

  return (
    <div style={sidebarStyle}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <li style={{ cursor: 'pointer' }}>🏠 Ana Sayfa</li>
        <li style={{ cursor: 'pointer' }}>📊 İstatistikler</li>
        <li style={{ cursor: 'pointer' }}>👤 Profilim</li>
        
        {/* KRİTİK GÖREV: Sadece rolü 'Admin' olanlar Ayarlar'ı görebilir */}
        {user.role === 'Admin' && (
          <li style={{ cursor: 'pointer', color: '#e84118', fontWeight: 'bold' }}>⚙️ Ayarlar (Admin)</li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;