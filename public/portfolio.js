// ----- Navbar scroll state + active link -----
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['hero','about','education','experience','projects','contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function onScroll() {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const scrollPos = window.scrollY + window.innerHeight / 3;
  let current = sections[0]?.id;
  for (const s of sections) {
    if (s.offsetTop <= scrollPos) current = s.id;
  }
  navLinks.forEach(l => {
    const href = l.getAttribute('href').replace('#','');
    l.classList.toggle('active', href === current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ----- Smooth scroll (with offset for fixed navbar) -----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
    document.getElementById('mobileMenu')?.classList.add('hidden');
  });
});

// ----- Mobile menu toggle -----
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// ----- Reveal on scroll -----
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 40, 240)}ms`;
  io.observe(el);
});

// ----- Contact form validation -----
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function setError(input, message) {
  input.classList.add('invalid');
  const msg = input.parentElement.querySelector('.error-msg');
  if (msg) { msg.textContent = message; msg.classList.remove('hidden'); }
}
function clearError(input) {
  input.classList.remove('invalid');
  const msg = input.parentElement.querySelector('.error-msg');
  if (msg) { msg.textContent = ''; msg.classList.add('hidden'); }
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name;
  const email = form.email;
  const message = form.message;
  let ok = true;

  [name, email, message].forEach(clearError);

  if (!name.value.trim() || name.value.trim().length < 2) { setError(name, 'Please enter your name (min. 2 characters).'); ok = false; }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email.value.trim())) { setError(email, 'Please enter a valid email.'); ok = false; }
  if (message.value.trim().length < 10) { setError(message, 'Message should be at least 10 characters.'); ok = false; }

  if (!ok) return;

  status.classList.remove('hidden');
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = 'Thanks — your message has been sent. I\'ll get back within 24 hours.';
    form.reset();
  }, 700);
});

// Clear error on input
['name','email','message'].forEach(id => {
  const el = document.getElementById(id);
  el?.addEventListener('input', () => clearError(el));
});
