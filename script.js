const author = document.getElementById("author").innerText
const title = document.getElementById("title").innerText


// Books will be stored into myLibrary array
let myLibrary = [];

// Constructor function for books
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

const addBook = new Book({ author, title })

//Add or push books into library array
function addBookToLibrary() {
    myLibrary.push(addBook)
}