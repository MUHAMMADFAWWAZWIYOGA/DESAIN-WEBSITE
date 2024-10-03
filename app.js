let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Mencegah prompt otomatis muncul
  event.preventDefault();
  // Simpan event untuk digunakan nanti
  deferredPrompt = event;

  // Tampilkan tombol atau UI yang meminta pengguna untuk install aplikasi
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Tampilkan prompt instalasi
    deferredPrompt.prompt();
    
    // Tunggu pengguna untuk merespon prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Pengguna menyetujui instalasi');
      } else {
        console.log('Pengguna menolak instalasi');
      }
      deferredPrompt = null;
    });
  });
});
