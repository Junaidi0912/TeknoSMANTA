document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Credentials yang sudah ditentukan
  const correctUsername = "Junaidi";
  const correctPassword = "27012009";

  // Ambil nilai input
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Validasi
  if (username === correctUsername && password === correctPassword) {
    alert("Login berhasil! Selamat datang, Admin.");
    window.location.href = "https://junaidi0912.github.io/TeknoSMANTA/beranda";
  } else {
    errorMessage.style.display = 'block';
  }
});
