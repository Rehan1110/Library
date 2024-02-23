//js

let addBtn = document.querySelector('.add-button');
let modal = document.querySelector('#modal');
let modalCloseBtn = document.querySelector('.modal-close-button');
let formSubmitButton = document.querySelector('.form-submit-button');

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

formSubmitButton.addEventListener('click', function(e){
  e.preventDefault();
  console.log('I am clicked');
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