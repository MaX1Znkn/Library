let myLibrary = [];

// constructor
function Book(title1, author, pages, read) {
    this.title1 = title1;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

document.getElementById('addBook').onclick = function() {
    const form = document.querySelector('form');
    form.style.display = 'block';
}

document.getElementById('hideButton').onclick = function() {
    const form = document.querySelector('form');
    form.style.display = 'none';
}

function addBookToLibrary() {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', (e) => {
        let title1 = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read');
        if (read.checked == true) {
            read = 'Да'
        } else {
            read = 'Нет'
        }
        myLibrary.push( new Book(title1, author, pages, read) );
        const form = document.querySelector('form');
        form.style.display = 'none';
        document.getElementById("form").reset();

        addView(myLibrary);
    });
}

function addView( myLibrary ) {
    const container = document.getElementById('container2');
    const div = document.createElement('div');
    div.classList.add('bookInfo');
    const p1 = document.createElement('p');
    p1.textContent = 'Название: ' + myLibrary[myLibrary.length-1].title1;
    const p2 = document.createElement('p');
    p2.textContent = 'Автор: ' + myLibrary[myLibrary.length-1].author;
    const p3 = document.createElement('p');
    p3.textContent = 'Кол-во страниц: ' + myLibrary[myLibrary.length-1].pages;
    const p4 = document.createElement('p');
    p4.textContent = 'Прочитано? ' + myLibrary[myLibrary.length-1].read;
    container.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
}

document.getElementById('submit').onclick = addBookToLibrary();