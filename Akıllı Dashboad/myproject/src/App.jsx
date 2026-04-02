import React from 'react';
import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Profile from './Profile';

function App() {
  return (
    // Uygulamanın tamamını Context Provider'lar ile sarmalıyoruz.
    // Artık içerideki hiçbir bileşene "prop" göndermemize gerek yok!
    <ThemeProvider>
      <UserProvider>
        
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, fontFamily: 'sans-serif' }}>
          {/* Üst Menü */}
          <Navbar />
          
          <div style={{ display: 'flex', flex: 1 }}>
            {/* Sol Menü */}
            <Sidebar />
            
            {/* İçerik Alanı */}
            <Profile />
          </div>
        </div>

      </UserProvider>
    </ThemeProvider>
  );
}

export default App;