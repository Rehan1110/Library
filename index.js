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

modalCloseBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
  if(e.target == modal){
    modal.style.display = 'none';
  }
});
const myLibrary = [];

function Book(title, author, pages, ReadOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ReadOrNot = this.ReadOrNot;
}

function addBookToLibrary() {
let Title = document.querySelector('#title').value
let Author = document.querySelector('#author').value
let Pages = document.querySelector('#pages').value
let Read = document.getElementById('read').checked
let newBook = new Book(Title, Author, Pages, Read);
myLibrary.push(newBook);
}
AddNewBook.addEventListener('submit', function(e){
  e.preventDefault();
  addBookToLibrary();
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