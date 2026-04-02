import React, { useState } from 'react';

function StudentForm({ onAdd }) {
  // Form inputları için yerel state'ler (Kontrollü bileşen)
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    // Boş gönderimi engellemek için basit bir kontrol
    if (!name.trim() || !department.trim()) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    // Yeni öğrenci objesi oluşturma (id olarak şimdilik Date.now() kullanıyoruz)
    const newStudent = {
      id: Date.now(), 
      name: name,
      department: department
    };

    // Ebeveyn bileşenden gelen onAdd fonksiyonunu tetikliyoruz
    onAdd(newStudent);

    // Formu gönderdikten sonra inputları temizliyoruz
    setName('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <label>Öğrenci Adı Soyadı:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Örn: Ali Yılmaz"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      
      <div>
        <label>Bölümü:</label>
        <input 
          type="text" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)} 
          placeholder="Örn: Bilgisayar Mühendisliği"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
        Kaydet
      </button>
    </form>
  );
}

export default StudentForm;