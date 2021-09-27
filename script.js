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

// makes sure that the form has been filled with valid information
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

function changeReadStatus(readSelect) {

}

// destroys then builds the entire book library into the DOM
function addBookCard() {
    booksarea.innerHTML = "";
    let totalPages = 0
    for (let i = 0; i < myLibrary.length; i++) { 
        let book = document.createElement("div");
        let title = document.createElement("p")
        let author = document.createElement("p")
        let length = document.createElement("p")
        let readLabel = document.createElement("label")
        let readSelect = document.createElement("select")

        let readSelectCS = document.createElement("option")
        readSelectCS.innerText = "Currently Reading"

        let readSelectPtR = document.createElement("option")
        readSelectPtR.innerText = "Plan to Read"

        let readSelectR = document.createElement("option")
        readSelectR.innerText = "Read"
        
        let readSelectD = document.createElement("option")
        readSelectD.innerText = "Dropped"

        switch (myLibrary[i].read) {
            case "Currently Reading":
                readSelectCS.setAttribute(`selected`, `selected`);
                break;
            case "Plan to Read":
                readSelectPtR.setAttribute(`selected`, `selected`);
                break;
            case "Read":
                readSelectR.setAttribute(`selected`, `selected`);
                break;
            case "Dropped":
                readSelectD.setAttribute(`selected`, `selected`);
                break;
        }
        
        let delBtn = document.createElement("button")
        let barPages = document.querySelector(".totPages")

        totalPages += parseInt(myLibrary[i].length)

        barPages.innerText = `${totalPages}`
        title.innerText = `Title: ${myLibrary[i].title}`
        author.innerText = `Author: ${myLibrary[i].author}`
        length.innerText = `Length: ${myLibrary[i].length}`
        delBtn.innerText = "Delete"
        
        readSelect.classList.add("readbtns")
        delBtn.classList.add("delbtns")
        
        readSelect.setAttribute(`name`, `readSelect`)
        readLabel.setAttribute(`for`, `readSelect`)
        readSelect.setAttribute(`id`, `readbtns${i}`)
        delBtn.setAttribute(`id`, `delbtn${i}`)
        book.setAttribute(`id`, `book${i}`)
        book.setAttribute(`class`, `book`)

        readSelect.appendChild(readSelectCS)
        readSelect.appendChild(readSelectPtR)
        readSelect.appendChild(readSelectR)
        readSelect.appendChild(readSelectD)

        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(length)
        book.appendChild(readLabel)
        book.appendChild(readSelect)
        book.appendChild(delBtn)
        booksarea.appendChild(book);
    }
    numberOfBooks()
}

// function that is called when the delete button is pressed on a book
function eventListenerFunc() {
    let number = this.id.slice(-1)
    let child = document.getElementById(`book${number}`)
    let libraryLength = myLibrary.length
    myLibrary.splice(number, 1)
    booksarea.removeChild(child)
    replaceExistIds(number, libraryLength)
    numberOfBooks()
}

function numberOfBooks() {
    let booksNumber = document.querySelector(".booksarea").childElementCount
    let numberPlace = document.querySelector(".booksNumber")
    numberPlace.innerText = `${booksNumber}`
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

        //selectReadBtns[i].addEventListener("click", )
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
    form.reset()
})

cancelBtn.addEventListener("click", function(){
    promptBox.style.display = "none"
    form.reset()
})
