const libraryForm = document.querySelector("form");
// const btn = document.querySelector("button");
// const table = document.querySelector("#book-info");
// const headers = table.querySelector("thead tr");
// const body = table.querySelector("tbody");
// const table = document.querySelector("table");

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
    console.log(addBook)
    return addBook
}

// Create book when submit button is clicked
libraryForm.addEventListener("submit", addBookToLibrary)

function displayBook() {
    var table = document.getElementById("books");
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("author").value);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("title").value);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("read").value);
    cell.appendChild(cellText);
    row.appendChild(cell);
    table.appendChild(row);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("pages").value);
    cell.appendChild(cellText);
    row.appendChild(cell);
    table.appendChild(row);
}

// function displayBook() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         let html = "<table border= '1|1'>";
//         html += "<tr>";
//         html += "<th>" + "Author" + "</th>"
//         html += "<td>" + myLibrary[i].author + "</td>";
//         html += "</tr>";
//         html += "<th>" + "Title" + "</th>"
//         html += "<td>" + myLibrary[i].title + "</td>";
//         html += "<tr>";
//         html += "<th>" + "Read" + "</th>"
//         html += "<td>" + myLibrary[i].read + "</td>";
//         html += "</tr>";
//         html += "<tr>";
//         html += "<th>" + "Pages" + "</th>"
//         html += "<td>" + myLibrary[i].pages + "</td>";
//         html += "</tr>";
//         html += "</table>";
//         table.innerHTML = html;
//     }
// }

