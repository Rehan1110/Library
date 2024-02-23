//js

let addBtn = document.querySelector('.add-button');
let modal = document.querySelector('#modal');
let modalCloseBtn = document.querySelector('.modal-close-button');
let formSubmitButton = document.querySelector('.form-submit-button');
let body = document.querySelector('#body');
let books ='';


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
})




const myLibrary = [];

function Book(title, author, pages, ReadOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ReadOrNot = this.ReadOrNot;
}

function addBookToLibrary() {
 
  // do stuff here
}
formSubmitButton.addEventListener('click', function(e){
  let Title = document.querySelector('#title').value
let Author = document.querySelector('#author').value
let Pages = document.querySelector('#pages').value
let Read = document.querySelector('#read').check
let book = new Book(Title, Author, Pages, Read);
  e.preventDefault();
  myLibrary.push(book);
  console.log(myLibrary);
  
  books.innerHTML = ` <p>Title: Money</p>
  <p>Author: Rehan</p>
  <p>Pages: 120</p>
  <button class="read-button">Not Read</button>
  <button class="remove-button">Remove</button>`

  body.appendChild(books);
})