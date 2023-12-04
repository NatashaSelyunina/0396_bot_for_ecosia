// ==UserScript==
// @name         Bot for Ecosia
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Selyunina Natalya
// @match        https://www.ecosia.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let button = document.getElementsByClassName("button")[1];
let input = document.getElementsByName("q")[0];
let links = document.links;
let keywords = ["Каталог автомобилей", "Купить автомобиль", "Продажа автомобилей"];
let keyword = keywords[getRandom(0, keywords.length)];

let i = 0;

let timerId = setInterval (() => {
  input.value += keyword[i];
  i++
  if (i == keyword.length) {
    clearInterval(timerId);  
    button.click();
  }
}, 500)

for (let i = 0; i < links.length; i++) {
  if (links[i].href.includes("auto.ru")) {
    console.log("Нашел строку " + links[i]);
    let link = links[i];
    link.click();
    break;
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
