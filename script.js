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
let usersRead = document.querySelector("#read-checkbox");
let userBookList = document.querySelector("tbody");

let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  const modal = closeModalButton.closest(".modal");
  addBookToLibrary();
  resetInputs();
  closeModal(modal);
  createBookList();
});

usersPages.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitBtn.click();
  }
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
      new Book(
        usersTitle.value,
        usersAuthor.value,
        usersPages.value,
        usersRead.checked
      )
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

    let newTableReadButton = document.createElement("td");
    let newReadButton = document.createElement("button");
    newReadButton.classList.add("read-button");
    newTableReadButton.appendChild(newReadButton);
    newBook.appendChild(newTableReadButton);
    if (myLibrary[i].read === true) {
      console.log(newBook);
      newReadButton.textContent = "read";
      newReadButton.style.backgroundColor = "#e1b14c";
    } else {
      newReadButton.textContent = "not read";
      newReadButton.style.backgroundColor = "#ec5f5f";
    }
    newReadButton.addEventListener("click", () => {
      myLibrary[i].read = !myLibrary[i].read;
      createBookList();
    });

    let newTableDeleteBtn = document.createElement("td");
    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList.add("delete-btn");
    newDeleteBtn.textContent = "delete";
    newTableDeleteBtn.appendChild(newDeleteBtn);
    newBook.appendChild(newTableDeleteBtn);
    newDeleteBtn.addEventListener("click", () => {
      removeBook([i]);
    });
  }
}

function clearList() {
  userBookList.innerHTML = "";
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  createBookList();
}
