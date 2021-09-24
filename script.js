let myLibrary = [];
let booksarea = document.querySelector(".booksarea")
let bookbutton = document.querySelector(".addbook")
let promptBox = document.querySelector(".promptArea")
let confirmBtn = document.querySelector("#confirmBtn")
let cancelBtn = document.querySelector("#cancelBtn")
let form = document.querySelector("#promptForm")
let delBookBtns = document.querySelectorAll(".delbtns")
let selectReadBtns = document.querySelectorAll(".readbtns")

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

function formValidation() {
    if (form.author.value == "" || form.title.value == "" || form.bookLength.value == "") {
        return false
    } else if (form.author.value.length >= 50 || form.title.value.length >= 100 || form.bookLength.value.length >= 6) {
        return false
    } else if (isNaN(parseInt(form.bookLength.value)) == true) {
        return false
    }
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
        let readSelect = document.createElement("button")
        let delBtn = document.createElement("button")
        title.innerText = myLibrary[i].title
        author.innerText = myLibrary[i].author
        length.innerText = myLibrary[i].length
        read.innerText = myLibrary[i].read
        readSelect.innerText = "Change read status"
        delBtn.innerText = "Delete"
        readSelect.classList.add("readbtns")
        delBtn.classList.add("delbtns")
        readSelect.setAttribute(`id`, `readbtns${i}`)
        delBtn.setAttribute(`id`, `delbtn${i}`)
        book.setAttribute(`id`, `book${i}`)
        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(length)
        book.appendChild(read)
        book.appendChild(readSelect)
        book.appendChild(delBtn)
        booksarea.appendChild(book);
    }
}

function eventListenerFunc() {
    let number = this.id.slice(-1)
    let child = document.getElementById(`book${number}`)
    let libraryLength = myLibrary.length
    myLibrary.splice(number, 1)
    booksarea.removeChild(child)
    delBookBtns = document.querySelectorAll(".delbtns")
    replaceExistIds(number, libraryLength)
    console.log(myLibrary)
}

//replaces all Id's with updated ones after deleting
function replaceExistIds(slicedNumber, arraySize) {
    for (let i = slicedNumber; i < arraySize; i++) {
        let book = document.querySelector(`#book${i}`)
        if (book == null) {
            continue;
        }
        book.setAttribute(`id`, `book${i - 1}`)
    }
    
    addBookCard()
    delReadEventListener()
}



function delReadEventListener() {
    delBookBtns = document.querySelectorAll(".delbtns")
    selectReadBtns = document.querySelectorAll(".readbtns")

    for(let i = 0; i < delBookBtns.length; i++) {
        delBookBtns[i].addEventListener("click", eventListenerFunc)

        selectReadBtns[i].addEventListener("click", function(){

        })
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
    delReadEventListener()
    promptBox.style.display = "none"
    console.log(myLibrary)
    form.reset()
})

cancelBtn.addEventListener("click", function(){
    promptBox.style.display = "none"
    form.reset()
})
