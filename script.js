document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Credentials yang sudah ditentukan
  const correctUsername = "admin";
  const correctPassword = "admin";

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
