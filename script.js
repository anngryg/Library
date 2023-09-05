//Adding modal functions
const openModalButton = document.querySelector("[data-modal-target]");
const closeModalButton = document.querySelector("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
  const modal = document.querySelector(openModalButton.dataset.modalTarget);
  openModal(modal);
});

closeModalButton.addEventListener("click", () => {
  const modal = closeModalButton.closest(".modal");
  resetInputs();
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

//
let usersAuthor = document.querySelector("#author");
let usersTitle = document.querySelector("#title");
let usersPages = document.querySelector("#pages");
let userBookList = document.querySelector("tbody");

let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  const modal = closeModalButton.closest(".modal");
  addBookToLibrary();
  resetInputs();
  closeModal(modal);
  createBookList();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  if (
    usersTitle.value.length === 0 ||
    usersAuthor.value.length === 0 ||
    usersPages.value.length === 0
  ) {
    alert("Please fill out the fields!");
  } else {
    myLibrary.push(
      new Book(usersTitle.value, usersAuthor.value, usersPages.value, "not")
    );
  }
}

function resetInputs() {
  usersAuthor.value = "";
  usersTitle.value = "";
  usersPages.value = "";
}

function createBookList() {
  clearList();
  for (let i = 0; i < myLibrary.length; i++) {
    let newBook = document.createElement("tr");
    userBookList.appendChild(newBook);

    let newTitle = document.createElement("td");
    newTitle.innerHTML = myLibrary[i].title;
    newBook.appendChild(newTitle);

    let newAuthor = document.createElement("td");
    newAuthor.innerHTML = myLibrary[i].author;
    newBook.appendChild(newAuthor);

    let newPages = document.createElement("td");
    newPages.innerHTML = myLibrary[i].pages;
    newBook.appendChild(newPages);
  }
}

function clearList() {
  userBookList.innerHTML = "";
}
