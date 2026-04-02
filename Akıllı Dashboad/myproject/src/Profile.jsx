import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useTheme } from './ThemeContext';

function Profile() {
  const { user, setUser } = useUser();
  const { theme } = useTheme();
  
  // Sadece bu forma ait geçici yerel state
  const [newName, setNewName] = useState(user.name);

  // Form gönderildiğinde UserContext'i güncelleyen fonksiyon
  const handleUpdate = (e) => {
    e.preventDefault();
    // Mevcut kullanıcı verilerini (...user) koruyarak sadece 'name' alanını güncelliyoruz
    setUser({ ...user, name: newName });
    alert("Profil güncellendi! Değişikliği Navbar'da görebilirsiniz.");
  };

  // Rol değiştirme testi için basit bir fonksiyon
  const toggleRole = () => {
    setUser({ ...user, role: user.role === 'Admin' ? 'User' : 'Admin' });
  };

  return (
    <div style={{ 
      padding: '30px', 
      flex: 1, 
      backgroundColor: theme === 'light' ? '#ffffff' : '#353b48',
      color: theme === 'light' ? '#000000' : '#ffffff'
    }}>
      <h2>Profil Ayarları</h2>
      
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <label>Adınız:</label>
        <input 
          type="text" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#00a8ff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Adı Güncelle
        </button>
      </form>

      <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>Test Paneli</h3>
        <p>Mevcut Yetkiniz: <strong>{user.role}</strong></p>
        <button onClick={toggleRole} style={{ padding: '8px', cursor: 'pointer' }}>
          Yetkiyi Değiştir (Admin / User)
        </button>
        <p style={{ fontSize: '12px', color: '#7f8fa6', marginTop: '10px' }}>
          *Yetkiyi değiştirdiğinizde sol menüdeki "Ayarlar" sekmesinin görünüp/kaybolduğunu test edebilirsiniz.
        </p>
      </div>
    </div>
  );
}

export default Profile;