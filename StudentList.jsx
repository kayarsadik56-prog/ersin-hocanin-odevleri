import React from 'react';

function StudentList({ students, onDelete }) {
  // Eğer liste boşsa kullanıcıya mesaj gösterelim
  if (students.length === 0) {
    return <p>Henüz kayıtlı öğrenci bulunmamaktadır.</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
          <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Ad Soyad</th>
          <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Bölüm</th>
          <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          // KRİTİK: Her bir liste elemanı için benzersiz bir "key" prop'u verilmeli!
          <tr key={student.id}>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.name}</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student.department}</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <button 
                onClick={() => onDelete(student.id)}
                style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                Sil
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;