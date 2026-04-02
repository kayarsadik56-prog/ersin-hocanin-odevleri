import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';

function App() {
  return (
    // Uygulamayı tarayıcı yönlendirmesine açıyoruz
    <BrowserRouter>
      {/* Navbar tüm sayfalarda görüneceği için Routes'un dışında kalıyor */}
      <Navbar />
      
      {/* Rota Mimarisi */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmler" element={<Movies />} />
        {/* Dinamik Rota (":filmSlug" değişken kısımdır) */}
        <Route path="/film/:filmSlug" element={<MovieDetail />} />
        {/* Eşleşmeyen tüm rotalar için "*" kullanıyoruz */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;