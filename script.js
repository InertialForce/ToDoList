const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const containerNote = document.querySelector('.container-note');

function createBox() {
  if (input.value === '') {
    alert('Введите заметку!');
  } else {
    const note = document.createElement('p');
    note.className = 'note';
    const btnClose = document.createElement('button');
    btnClose.className = 'btn-close';
    const noteBox = document.createElement('li');
    noteBox.className = 'note-box'
    note.textContent = input.value;
    btnClose.textContent = 'x';
    containerNote.appendChild(noteBox);
    noteBox.appendChild(note);
    noteBox.appendChild(btnClose);

    btnClose.addEventListener('click', function () {
      noteBox.parentNode.removeChild(noteBox);
    })
  }
}

btn.addEventListener('click', createBox);
