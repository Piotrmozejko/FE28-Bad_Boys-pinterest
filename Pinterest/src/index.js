import { createAllLi } from "./users.js";
import { reset_board } from "./func.js";

// import users_base from "./users.js";
let resp = await fetch("./usersdata.json");
const users_base = await resp.json();
reset_board(users_base);

createAllLi(users_base, "Выбрать доску");
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
    //alert(searchElement.value);
    // console.log("---------");
    // console.log(searchElement.value);
    console.log(searchElement.placeholder);
    if (searchElement.value) {
        console.log("/////////");
        createAllLi(users_base, searchElement.value);
    } else {
        console.log("---------");
        createAllLi(users_base, deskElement.value);
    }
});
