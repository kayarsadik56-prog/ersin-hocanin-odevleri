function hesapla() {
    // 1. Inputlardaki değerleri alıyoruz
    // parseFloat() metni ondalıklı sayıya çevirir
    let vize = parseFloat(document.getElementById('vizeInput').value);
    let final = parseFloat(document.getElementById('finalInput').value);
    
    // 2. Sonucun yazılacağı elementi seçiyoruz
    let sonucAlani = document.getElementById('sonuc');

    // Boş giriş kontrolü (Hata almamak için)
    if (isNaN(vize) || isNaN(final)) {
        sonucAlani.innerText = "Lütfen her iki notu da giriniz!";
        sonucAlani.style.color = "orange";
        return;
    }

    // 3. Ortalamayı hesaplıyoruz
    let ortalama = (vize * 0.4) + (final * 0.6);

    // 4. Karar Yapısı (if/else) ve Ekrana Yazdırma
    if (ortalama >= 50) {
        sonucAlani.innerText = "GEÇTİ - Notunuz: " + ortalama.toFixed(2);
        sonucAlani.style.color = "green";
    } else {
        sonucAlani.innerText = "KALDI - Notunuz: " + ortalama.toFixed(2);
        sonucAlani.style.color = "red";
    }
}