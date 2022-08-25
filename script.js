const libraryForm = document.querySelector("form");
const openModal = document.querySelector(".open-button")



myLibrary = [];

// Constructor function for books
function Book(author, title, read, pages) {
    this.author = author;
    this.title = title;
    this.read = read;
    this.pages = pages
}

//Create instance of object then push to myLibrary array
function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const read = document.querySelector("#read").value;
    const pages = document.querySelector("#pages").value;
    const addBook = new Book(author, title, read, pages)
    myLibrary.push(addBook)
    displayBook()
    return addBook
}


openModal.addEventListener("click", () => {
    modal.show();
})

// Create book when submit button is clicked
libraryForm.addEventListener("submit", addBookToLibrary)

function displayBook() {
    console.log(...myLibrary);
    const card = document.getElementById("books");
    card.textContent = "";
    myLibrary.forEach((book) => {

        const authorText = document.createElement("Author");
        authorText.textContent = book.author;
        authorText.style.padding = "1px"
        const header1 = document.createElement("h4")
        header1.textContent = "Author"

        const titleText = document.createElement("Titles");
        titleText.textContent = book.title;
        titleText.style.padding = "1px"
        const header2 = document.createElement("h4")
        header2.textContent = "Title"

        const pagesText = document.createElement("Pages");
        pagesText.textContent = book.pages;
        pagesText.style.padding = "1px"
        const header3 = document.createElement("h4")
        header3.textContent = "Pages"

        const readText = document.createElement("Read");
        readText.textContent = book.read;
        readText.style.padding = "1px"
        const header4 = document.createElement("h4")
        header4.textContent = "Read"


        const bookDiv = document.createElement("div");
        bookDiv.append(header1, authorText);
        bookDiv.append(header2, titleText);
        bookDiv.append(header3, pagesText);
        bookDiv.append(header4, readText);
        card.append(bookDiv);
    });
}

// myLibrary.push(new Book('a', 'a', false, 1));
// myLibrary.push(new Book('b', 'b', false, 2));
// myLibrary.push(new Book('c', 'c', false, 3));
// myLibrary.push(new Book('d', 'd', false, 4));
// myLibrary.push(new Book('e', 'e', false, 5));
// myLibrary.push(new Book('f', 'f', false, 6));
// myLibrary.push(new Book('g', 'g', false, 7));
// myLibrary.push(new Book('h', 'h', false, 8));
// myLibrary.push(new Book('i', 'i', false, 9));
// myLibrary.push(new Book('j', 'j', false, 10));
// myLibrary.push(new Book('k', 'k', false, 11));
// myLibrary.push(new Book('l', 'l', false, 12));
// myLibrary.push(new Book('m', 'm', false, 13));
console.log(myLibrary)