import { createAllLi } from "./users.js";
import { reset_board } from "./func.js";
import dialogWindow from "./windows.js";

// import users_base from "./users.js";
let users_base = [];
async function getUser() {
  let resp = await fetch("./usersdata.json");
  users_base = await resp.json();
  reset_board(users_base);

  createAllLi(users_base, "Выбрать доску");
  dialogWindow();
}
getUser();
let ulConteiner = document.querySelector(".picture-list");
let deskElement = document.querySelector(".drop-list");
let searchElement = document.querySelector(".search-header");

deskElement.addEventListener("input", () => {
  ulConteiner.innerHTML = "";
  alert(deskElement.value);
  createAllLi(users_base, deskElement.value);
});

searchElement.addEventListener("input", () => {
  ulConteiner.innerHTML = "";

  if (searchElement.value) {
    createAllLi(users_base, searchElement.value);
  } else {
    createAllLi(users_base, deskElement.value);
  }
});
