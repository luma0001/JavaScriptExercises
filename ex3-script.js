window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_container").classList.add("move");
  document
    .querySelector("#orange_container")
    .addEventListener("click", clickOrange);
}

function clickOrange() {
  console.log("klik viker");
  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}
