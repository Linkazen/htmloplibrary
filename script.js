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
    console.log(bookInfo[3])
    let addedBook = new book(bookInfo[0], bookInfo[1], bookInfo[2], bookInfo[3]);
    myLibrary.push(addedBook);
    return
}

function formValidation() {
    if (form.author.value == "" || form.title.value == "" || form.bookLength.value == "" || form.read.value == "") {
        return false
        console.log("bruh")
    }
    console.log("bruh")
    return true
}

function addBookCard() {
    booksarea.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        let title = document.createElement("p")
        let author = document.createElement("p")
        let length = document.createElement("p")
        let read = document.createElement("p")
        title.innerText = myLibrary[i].title
        author.innerText = myLibrary[i].author
        length.innerText = myLibrary[i].length
        read.innerText = myLibrary[i].read
        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(length)
        book.appendChild(read)
        booksarea.appendChild(book);
    }
}

bookbutton.addEventListener("click", function(){
    promptBox.style.display = "flex"
})

confirmBtn.addEventListener("click", function(){
    let check = formValidation()
    if (check == false) {
        return
    }
    addBookToLibrary()
    addBookCard()
    promptBox.style.display = "none"
    form.reset()
})

cancelBtn.addEventListener("click", function(){
    promptBox.style.display = "none"
    form.reset()
})