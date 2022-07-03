//Caching the DOM
const addBookBtn = document.getElementById('add-book-btn');
const modal = document.getElementById('modal');
const newBookForm = document.getElementById('new-book-form');
const libraryDisplay = document.getElementById('library-display');
const SubmitBtn = document.getElementById('submit-btn');
const removeBtns = document.getElementsByClassName('removeBtn');


//Data Structures
const library = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    info() {
        return (`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

//Event Listeners
addBookBtn.addEventListener('click', displayForm);
SubmitBtn.addEventListener('click', addBookToLibrary);
// TODO: add remove fn
// removeBtns.forEach(addEventListener('click', this.parent.remove()));


function displayForm() {
    modal.style.display = 'block';
}

function createBookCard(book, i) {
    const card = document.createElement('div');
    card.setAttribute('data-index', i);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.classList.add('btn');
    const title = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');


    removeBtn.textContent = 'X';
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    if (book.isRead == true) {
        readBtn.textContent = 'Read';
        //TODO add classes for read/not read
        readBtn.classList.add('btn', 'btn-outline-success')
    } else {
        readBtn.textContent = 'Not Read Yet';
        //TODO add classes for read/not read
        readBtn.classList.add('red')
    }
 

    card.appendChild(removeBtn);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readBtn);

    libraryDisplay.appendChild(card);
}

function createBookObj() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked

    newBookForm.reset();
    return new Book(title, author, pages, isRead);
}

function addBookToLibrary(e) {
    e.preventDefault();
   //create new book obj
    const newBook = createBookObj();

    //push new book to library if not already in it
    //TODO: could add err for if in library
    if (!(library.includes(newBook))) {
        //TODO: save data in db if user is signed in
        library.push(newBook);
        console.log(library);
        saveLocal();
        updateLibraryDisplay();
        
    }
}

function updateLibraryDisplay() {
    clearLibraryDisplay();
    library.forEach((book, i) => {
        createBookCard(book, i);
    });
}

function clearLibraryDisplay() {
    libraryDisplay.textContent = '';
}

//Local Storage
function saveLocal() {
    window.localStorage.setItem('library', JSON.stringify(library))
}

// function restoreLocal() {
//     const books = JSON.parse(localStorage.getItem('library'));
//     if 