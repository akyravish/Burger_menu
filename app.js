// jshint esversion:6

const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => nav.classList.toggle('active'));
