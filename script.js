document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Credentials yang sudah ditentukan
  const correctUsername = "Admin";
  const correctPassword = "22102008";

  // Ambil nilai input
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Validasi
  if (username === correctUsername && password === correctPassword) {
    alert("Login berhasil! Selamat datang, Admin.");
    window.location.href = "admin.html";
  } else {
    errorMessage.style.display = 'block';
  }
});
