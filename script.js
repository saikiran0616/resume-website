// script.js - small interactivity
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('toggleTheme');
  const downloadPdf = document.getElementById('downloadPdf');
  toggle.addEventListener('click', () => document.documentElement.classList.toggle('dark'));
  // keyboard T toggles theme
  document.addEventListener('keydown', (e) => { if(e.key.toLowerCase()==='t') document.documentElement.classList.toggle('dark'); });
  // smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  // simple focus on first section when page loads
  const first = document.querySelector('main .card');
  if(first) first.scrollIntoView({behavior:'smooth', block:'start'});
});
