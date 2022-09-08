const libraryForm = document.querySelector("form");
const openModal = document.querySelector(".open-button");
const bookIndex = document.querySelectorAll("#books");

myLibrary = [];

// Constructor function for books
function Book(author, title, read, pages) {
    this.author = author;
    this.title = title;
    this.read = read;
    this.pages = pages;
}
Book.prototype.toggleRead = function () {
    this.read = !this.read;
}
//Create instance of object then push to myLibrary array
function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const read = document.querySelector("#read").value;
    const pages = document.querySelector("#pages").value;
    const addBook = new Book(author, title, read, pages);
    myLibrary.push(addBook);
    displayBook();
    return addBook;
}

// Modal pops open with form from dialog element
openModal.addEventListener("click", () => {
    modal.showModal();
})

// Create book when submit button is clicked
libraryForm.addEventListener("submit", addBookToLibrary);

function displayBook() {
    const card = document.getElementById("books");
    card.textContent = "";
    myLibrary.forEach((book, i) => {
        const authorText = document.createElement("Author");
        authorText.textContent = book.author;
        const header1 = document.createElement("h3");
        header1.textContent = "Author";

        const titleText = document.createElement("Titles");
        titleText.textContent = book.title;
        const header2 = document.createElement("h3");
        header2.textContent = "Title";

        const pagesText = document.createElement("Pages");
        pagesText.textContent = book.pages;
        const header3 = document.createElement("h3");
        header3.textContent = "Pages";

        const readText = document.createElement("Read");
        readText.textContent = book.read;
        const header4 = document.createElement("h3");
        header4.textContent = "Read";

        const bookDiv = document.createElement("div");
        bookDiv.className = "book-div";
        bookDiv.setAttribute("data-book-index", i);

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-book";
        removeBtn.innerHTML = "+";

        removeBtn.addEventListener("click", function () {
            myLibrary.splice(book, 1)
            bookDiv.remove()
            displayBook()
        });

        readText.addEventListener("click", () => {
            if (readText.textContent === "Read") {
                readText.textContent = "Not read"
            } else {
                readText.textContent === "Not read"
                readText.textContent = "Read"
            }
        })

        bookDiv.append(removeBtn);
        bookDiv.append(header1, authorText);
        bookDiv.append(header2, titleText);
        bookDiv.append(header3, pagesText);
        bookDiv.append(header4, readText);
        card.append(bookDiv);
    })
}

