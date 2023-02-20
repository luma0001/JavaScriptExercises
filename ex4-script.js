window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", clickOrange);
  document
    .querySelector("#orange_sprite")
    .addEventListener("animationend", done);
}

function clickOrange() {
  console.log("klik viker");
  document.querySelector("#orange_sprite").classList.add("jump-once");
}

function done() {
  document.querySelector("#orange_sprite").classList.remove("jump-once");
}
