import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './App.css'; // İstersen basit bir CSS dosyası ekleyebilirsin

function App() {
  // KRİTİK: Öğrenci dizisi (state) ebeveyn bileşende tutuluyor!
  const [students, setStudents] = useState([]);

  // Formdan gelen yeni öğrenciyi listeye ekleyen fonksiyon
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // İlgili id'ye sahip öğrenciyi listeden silen fonksiyon
  const deleteStudent = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div className="container" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Sol Taraf: Form */}
      <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Yeni Öğrenci Ekle</h3>
        <StudentForm onAdd={addStudent} />
      </div>

      {/* Sağ Taraf: Tablo */}
      <div style={{ flex: 2, padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Öğrenci Listesi</h3>
        <StudentList students={students} onDelete={deleteStudent} />
      </div>
    </div>
  );
}

export default App;