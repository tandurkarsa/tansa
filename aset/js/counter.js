// Hit Counter untuk Tandur Karsa / Stepe Diamond
// Menggunakan CountAPI (https://countapi.xyz)

const NAMESPACE = 'tansa-projek'; // Ganti kalau mau, tapi harus unik
const KEY_SITE = 'visits';
const KEY_GERBANG = 'gate-visits';

// Fungsi untuk update elemen HTML dengan ID tertentu
function updateCounter(elementId, key) {
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${key}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(elementId).innerText = data.value;
        })
        .catch(error => {
            console.error('Counter error:', error);
            document.getElementById(elementId).innerText = '---';
        });
}

// Panggil fungsi ini dari halaman yang membutuhkan
function initCounters() {
    // Cek apakah elemen dengan id 'visitor-counter' ada di halaman
    if (document.getElementById('visitor-counter')) {
        updateCounter('visitor-counter', KEY_SITE);
    }
    // Counter khusus untuk laman Gerbang (opsional)
    if (document.getElementById('gate-counter')) {
        updateCounter('gate-counter', KEY_GERBANG);
    }
}

// Jalankan saat halaman selesai dimuat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
} else {
    initCounters();
}