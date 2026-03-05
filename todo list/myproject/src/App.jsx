import React, { useState, useEffect } from 'react';

function App() {
  // 1. STATE'LER (Uygulamanın Hafızası)
  // Input kutusuna yazılan metni tutar
  const [yeniGorev, setYeniGorev] = useState('');
  
  // Eklenen görevlerin listesini tutar
  const [gorevler, setGorevler] = useState([]);

  // 2. USEEFFECT: Sayfa ilk açıldığında localStorage'dan verileri çek (Mounting)
  useEffect(() => {
    const kayitliGorevler = localStorage.getItem('benimGorevlerim');
    if (kayitliGorevler) {
      // String olarak gelen veriyi tekrar JavaScript dizisine (Array) çeviriyoruz
      setGorevler(JSON.parse(kayitliGorevler));
    }
  }, []); // Boş dizi [] -> Sadece bileşen ilk yüklendiğinde 1 kez çalışır.

  // 3. USEEFFECT: Görevler listesi her değiştiğinde localStorage'a kaydet (Updating)
  useEffect(() => {
    // Diziyi String'e çevirip kaydediyoruz (localStorage sadece metin tutar)
    localStorage.setItem('benimGorevlerim', JSON.stringify(gorevler));
  }, [gorevler]); // Bağımlılık dizisi [gorevler] -> Bu state her değiştiğinde tetiklenir.

  // 4. FONKSİYONLAR (Eylemler)
  const gorevEkle = () => {
    // Boşluk eklemeyi engelle
    if (yeniGorev.trim() === '') return;

    // Her görev için benzersiz bir ID (Date.now) ve metin oluşturuyoruz
    const yeni = {
      id: Date.now(),
      metin: yeniGorev
    };

    // Mevcut görevleri (...gorevler) koruyup, yeni görevi ekliyoruz
    setGorevler([...gorevler, yeni]);
    
    // Eklendikten sonra input kutusunu temizle
    setYeniGorev('');
  };

  const gorevSil = (silinecekId) => {
    // Silinmek istenen ID'ye EŞİT OLMAYANLARI filtrele (yani onu diziden at)
    const guncelListe = gorevler.filter((gorev) => gorev.id !== silinecekId);
    setGorevler(guncelListe);
  };

  // Enter tuşuyla ekleme yapabilmek için (Geçen haftadan hatırlarsın!)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      gorevEkle();
    }
  };

  // 5. ARAYÜZ (JSX)
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>📝 Yapılacaklar Listesi</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Yeni bir görev yazın..."
          value={yeniGorev} // Inputun değerini state'e bağlıyoruz (Controlled Component)
          onChange={(e) => setYeniGorev(e.target.value)} // Her harfte state'i güncelliyoruz
          onKeyDown={handleKeyDown}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={gorevEkle}
          style={{ padding: '10px 15px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Ekle
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {gorevler.map((gorev) => (
          <li 
            key={gorev.id} 
            style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f9f9f9', marginBottom: '8px', borderRadius: '5px', border: '1px solid #eee' }}
          >
            <span>{gorev.metin}</span>
            <button 
              onClick={() => gorevSil(gorev.id)}
              style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', padding: '5px 10px' }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>

      {/* Liste boşsa kullanıcıya bilgi verelim */}
      {gorevler.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}>Henüz bir görev eklenmedi. Harika, tamamen boşsunuz!</p>
      )}
    </div>
  );
}

export default App;