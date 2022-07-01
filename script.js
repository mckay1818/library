const addBookBtn = document.getElementById('add-book-btn');
const newBookForm = document.getElementById('new-book-form');

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = int(pages);
    this.read = read;
}

Book.prototype.info() {
    return(`${title} by ${author}, ${pages} pages, ${read}`)
}

function createBookCard() {
    const card = document.createElement('div');
    const removeBtn = document.createElement('button');
    const title = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('input');
    readBtn.setAttribute('type', 'checkbox');
}

function createBookObj() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    return new Book(title, author, pages, isRead)
}

function addBookToLibrary() {
   //create new book obj
    newBook = createBookObj();

    //push new book to library if not already in it
    //TODO: could add err for if in library
    if (!(newBook in library)) {
        //TODO: save data in db if user is signed in
        library.push(newBook);
        saveLocal();
        updateLibraryDisplay();
    }
}

function updateLibraryDisplay() {
    library.forEach(book => {
        createBookCard()
    })
}

function saveLocal() {
    window.localStorage.setItem('library', JSON.stringify(library.books))
}



newBookForm.onsubmit() = addBookToLibrary()