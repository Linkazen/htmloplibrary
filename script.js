let myLibrary = [];
let booksarea = document.querySelector(".booksarea")
let bookbutton = document.querySelector(".addbook")
let promptBox = document.querySelector(".promptArea")

function book(title, author, length, read) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
}

function addBookToLibrary() {
    let title = prompt("enter your info pp head", "title");
    let author = prompt("enter your info pp head", "author");
    let length = prompt("enter your info pp head", "length");
    let read = confirm("have you read this?");
    read = read ? "yes" : "no";
    let addedBook = new book(title, author, length, read);
    myLibrary.push(addedBook);
}

function addBookCard() {
    let book = document.createElement("div");
    book.className = "books"

    booksarea.appendChild(books);
}

bookbutton.addEventListener("click", function(){
    promptBox.style.display = "block"
})