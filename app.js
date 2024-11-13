const menuBtn = document.getElementById('menuBtn');
const header = document.getElementsByTagName('nav')[0];

menuBtn.addEventListener('click', (e) => header.classList.toggle('expanded'));

const slider = document.getElementById('slider1');
const output = document.getElementById('output');

slider.addEventListener('input', (e) => (output.textContent = slider.value));
output.textContent = slider.value;
