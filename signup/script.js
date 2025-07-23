// Dark mode toggle
const body = document.body;
const darkToggle = document.getElementById('darkToggle');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  darkToggle.textContent = 'Light Mode';
}

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  darkToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// Signup
function signup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  if (name && email && password) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Signup Successful! Please login.');
    window.location.href = 'index.html';
  } else {
    alert('Please fill all fields!');
  }
}

// Login
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    window.location.href = 'welcome.html';
  } else {
    alert('Invalid email or password!');
  }
}

// Display user name on welcome page
window.onload = function() {
  const nameEl = document.getElementById('userName');
  if (nameEl) nameEl.textContent = localStorage.getItem('userName') || 'User';
};

// Logout
function logout() {
  window.location.href = 'index.html';
}

// Particles background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray = [];

  for (let i = 0; i < 60; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 2 + Math.random() * 3,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particlesArray) {
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  }
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', initParticles);

initParticles();
animateParticles();