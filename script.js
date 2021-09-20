let myLibrary = [];
let booksarea = document.querySelector(".booksarea")
let bookbutton = document.querySelector(".addbook")
let promptBox = document.querySelector(".promptArea")
let confirmBtn = document.querySelector("#confirmBtn")
let cancelBtn = document.querySelector("#cancelBtn")
let form = document.querySelector("#promptForm")

function book(title, author, length, read) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let length = document.querySelector("#length").value;
    let read = document.querySelector("#read").checked;
    read = read ? "yes" : "no";
    let addedBook = new book(title, author, length, read);
    myLibrary.push(addedBook);
    console.log(myLibrary)
}

function addBookCard() {
    let book = document.createElement("div");
    book.className = "books"

    booksarea.appendChild(books);
}

bookbutton.addEventListener("click", function(){
    promptBox.style.display = "flex"
})

confirmBtn.addEventListener("click", function(){
    addBookToLibrary()
    promptBox.style.display = "none"
    form.reset();
})

cancelBtn.addEventListener("click", function(){
    promptBox.style.display = "none"
    form.reset()
})