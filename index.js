//js

let addBtn = document.querySelector('.add-button');
let modal = document.querySelector('#modal');
let modalCloseBtn = document.querySelector('.modal-close-button');
let ReadValue = document.querySelector('.read-button');

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

ReadValue.addEventListener('click', () =>{
  console.log("I am clicked");
  console.log(ReadValue.value);
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