const newBookBtn = document.getElementById('new-book-btn');
const newBookForm = document.getElementById('new-book-form');
let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read}`; 
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookShelf(myLibrary) {
    //display each book on a 'card'
}

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = 'block';
});