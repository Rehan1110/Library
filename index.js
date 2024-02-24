//js

let addBtn = document.querySelector('.add-button');
let modal = document.querySelector('#modal');
let modalCloseBtn = document.querySelector('.modal-close-button');
let AddNewBook = document.querySelector('#form');
let bodyContainer = document.querySelector('.body-container');


addBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  modal.style.display = 'block';
})

function ModalClose(){
modal.style.display = 'none';
}

modalCloseBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  ModalClose();
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    ModalClose();
  }
});

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}

const myLibrary = [];

function Book(title, author, pages, ReadOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ReadOrNot = ReadOrNot;
}

Book.prototype.toggleRead = function() {
  this.ReadOrNot =! this.ReadOrNot;
}
function ToggleRead(index) {
myLibrary[index].toggleRead();
render();
}

function render() {
  let LibraryEl = document.querySelector('.body-container');
  LibraryEl.innerHTML = "";
  for(let i=0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "body");
    bookElement.innerHTML = `<p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <button class="read-button" onclick={ToggleRead(${i})}>${book.ReadOrNot ? "Readed":"Not Readed"}</button>
    <button class="remove-button" onclick={removeBook(${i})}>Remove</button>`
    LibraryEl.appendChild(bookElement);
  }
}

function addBookToLibrary() {
let title = document.querySelector('#title').value
let author = document.querySelector('#author').value
let pages = document.querySelector('#pages').value
let ReadOrNot = document.querySelector('#read').checked
let newBook = new Book(title, author, pages, ReadOrNot);
myLibrary.push(newBook);
}
AddNewBook.addEventListener('submit', function(e){
  e.preventDefault();
  addBookToLibrary();
  render();
  ModalClose();
  // ModalClose();
  // myLibrary.push(newBook);
  // let books ='';
  // books.innerHTML += ` 
  // <div id="body">
  // <p>Title: Money</p>
  // <p>Author: Rehan</p>
  // <p>Pages: 120</p>
  // <button class="read-button">Not Read</button>
  // <button class="remove-button">Remove</button>
  // </div>`
  // 
})