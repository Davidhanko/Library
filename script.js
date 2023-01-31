const submitButton = document.getElementById("submit");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  createHTMLFromLibrary();
}

function createHTMLFromLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i].title;
    let author = myLibrary[i].author;
    let pages = myLibrary[i].pages;
    let read = myLibrary[i].read;
    createHTML(book, author, pages, read);
  }
}

function createHTML(book, author, pages, read) {
  let bookshelf = document.getElementById("bookshelf");
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookshelf.appendChild(bookDiv);
  let bookTitle = document.createElement("h2");
  bookTitle.classList.add("bookTitle");
  bookTitle.innerHTML = book;
  bookDiv.appendChild(bookTitle);
  let bookAuthor = document.createElement("p");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.innerHTML = author;
  bookDiv.appendChild(bookAuthor);
  let bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.innerHTML = pages;
  bookDiv.appendChild(bookPages);
  let bookRead = document.createElement("p");
  bookRead.classList.add("bookRead");
  bookRead.innerHTML = read;
  bookDiv.appendChild(bookRead);
  let bookDelete = document.createElement("button");
  bookDelete.classList.add("bookDelete");
  bookDelete.textContent = "Delete";
  bookDiv.appendChild(bookDelete);
  bookDelete.addEventListener("click", function () {
    bookDiv.remove();
    removeFromArray(book);
  });
}

function updateBooks(book, author, pages, read) {
  let newBook = new Book(book, author, pages, read);
  addBookToLibrary(newBook);
}

function checkData() {
  let book = document.getElementById("bnID").value;
  let author = document.getElementById("autID").value;
  let pages = document.getElementById("pagesID").value;
  let read = buttonChecked();
  if (book !== "" && author !== "" && pages !== "" && read !== "") {
    updateBooks(book, author, pages, read);
    hideForm();
  }
}

function hideForm() {
  if (document.getElementById("form1").style.display === "block") {
    document.getElementById("form1").style.display = "none";
  }
}

// eslint-disable-next-line no-unused-vars
function openForm() {
  document.getElementById("form1").style.display = "block";
}

function buttonChecked() {
  let read = document.getElementById("readID").checked;
  if (read) {
    return "True";
  } else {
    return "False";
  }
}

submitButton.addEventListener("click", function () {
  checkData();
});

function removeFromArray(title) {
  let index = myLibrary.findIndex((book) => book.title === title);
  myLibrary.splice(index, 1);
}
