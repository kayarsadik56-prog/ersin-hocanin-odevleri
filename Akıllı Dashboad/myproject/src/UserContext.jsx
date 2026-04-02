import React, { createContext, useState, useContext } from 'react';

// 1. Context'i oluşturuyoruz
const UserContext = createContext();

// 2. Özel bir hook yazıyoruz (Diğer dosyalarda kolayca kullanabilmek için)
export const useUser = () => useContext(UserContext);

// 3. Provider Bileşeni (Tüm uygulamayı veya ilgili kısmı sarmalayacak)
export const UserProvider = ({ children }) => {
  // Varsayılan kullanıcı durumumuz
  const [user, setUser] = useState({
    name: 'Ahmet Yılmaz',
    role: 'User', // Bunu 'Admin' yaparak Sidebar'ı test edebilirsin
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};