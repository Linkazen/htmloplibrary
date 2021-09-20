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
    let bookInfo = []
    for(let i = 0; i < (form.length - 2); i++) {
        bookInfo.push(form[i].value)
    }
    let addedBook = new book(bookInfo[0], bookInfo[1], bookInfo[2], bookInfo[3]);
    myLibrary.push(addedBook);
    return
}

function addBookCard() {
    booksarea.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.className = "books"
        book.innerText = "testing"
        booksarea.appendChild(book);
    }
}

bookbutton.addEventListener("click", function(){
    promptBox.style.display = "flex"
})

confirmBtn.addEventListener("click", function(){
    addBookToLibrary()
    addBookCard()
    promptBox.style.display = "none"
},)

cancelBtn.addEventListener("click", function(){
    promptBox.style.display = "none"
})