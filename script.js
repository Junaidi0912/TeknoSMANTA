document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();


  const correctUsername = "PENH";       
  const correctPassword = "22102008";    

  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('errorMessage');


  if (username === correctUsername && password === correctPassword) {
    alert("Login berhasil! Selamat datang, Admin.");
    window.location.href = "https://junaidi0912.github.io/TeknoSMANTA/beranda ";
  } else {
    errorMessage.style.display = 'block';
  }
});
