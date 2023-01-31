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
}

// function createHTMLFromLibrary() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     let book = myLibrary[i].title;
//     let author = myLibrary[i].author;
//     let pages = myLibrary[i].pages;
//     let read = myLibrary[i].read;
//     createHTML(book, author, pages, read);
//   }
// }

function createHTML(book, author, pages) {
  let bookshelf = document.getElementById("bookshelf");
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookshelf.appendChild(bookDiv);

  let bookTitle = document.createElement("h2");
  bookTitle.classList.add("bookTitle");
  bookTitle.innerHTML = "Title: " + book;
  bookDiv.appendChild(bookTitle);

  let bookAuthor = document.createElement("p");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.innerHTML = "By: " + author;
  bookDiv.appendChild(bookAuthor);

  let bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.innerHTML = "Has: " + pages + " pages";
  bookDiv.appendChild(bookPages);

  let bookRead = document.createElement("button");
  bookRead.classList.add("bookRead");
  changeBookRead(bookRead);
  bookRead.addEventListener("click", () => changeBookRead(bookRead));
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

function changeBookRead(bookRead) {
  if (bookRead.innerHTML === "Did not read it yet") {
    bookRead.innerHTML = "Read it";
  } else {
    bookRead.innerHTML = "Did not read it yet";
  }
}

function updateBooks(book, author, pages, read) {
  let newBook = new Book(book, author, pages, read);
  addBookToLibrary(newBook);
  createHTML(book, author, pages, read);
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
    document.getElementById("newBook").disabled = false;
    document.getElementById("form1").classList.remove("flip-scale-2-hor-top");
  }
}

// eslint-disable-next-line no-unused-vars
function openForm() {
  document.getElementById("form1").style.display = "block";
  document.getElementById("newBook").disabled = true;
  document.getElementById("form1").classList.add("flip-scale-2-hor-top");
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
