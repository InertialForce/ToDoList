const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const page = document.querySelector('.page');

btn.addEventListener('click', function() {
  let note = document.createElement('p');
  note.textContent = input.value;
  page.appendChild(note);
})
