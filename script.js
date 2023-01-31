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

function updateBooks(book, author, pages, read) {
  let newBook = new Book(book, author, pages, read);
  addBookToLibrary(newBook);
}

function checkData() {
  let book = document.getElementById("bnID").value;
  let author = document.getElementById("autID").value;
  let pages = document.getElementById("pagesID").value;
  let read = buttonChecked();
  updateBooks(book, author, pages, read);
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
