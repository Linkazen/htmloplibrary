let myLibrary = [];

function book(title, author, length, read) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
}

function addBookToLibrary() {
    let title = prompt("enter your info pp head", "title")
    let author = prompt("enter your info pp head", "author")
    let length = prompt("enter your info pp head", "length")
    let read = confirm("have you read this?")
    let addedBook = new book(title, author, length, read)
    myLibrary.push(addedBook)
}

addBookToLibrary()
console.log(myLibrary)

