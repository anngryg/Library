const openModalButton = document.querySelector("[data-modal-target]");
const closeModalButton = document.querySelector("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
  const modal = document.querySelector(openModalButton.dataset.modalTarget);
  openModal(modal);
});

closeModalButton.addEventListener("click", () => {
  const modal = closeModalButton.closest(".modal");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) {
    return;
  } else {
    modal.classList.add("active");
    overlay.classList.add("active");
  }
}

function closeModal(modal) {
  if (modal == null) {
    return;
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", addBookToLibrary);

let usersAuthor = document.querySelector("#author");
let usersTitle = document.querySelector("#title");

const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(new Book(usersAuthor.value, usersTitle.value, "not"));
}

//    this.info = function(){
//   return title+" by "+author+", "+pages+", "+read;}

console.log(myLibrary);
