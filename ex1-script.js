window.addEventListener("load", start);

function start() {
  console.log("start viker");
  document
    .querySelector("#orange_container")
    .addEventListener("click", clickOrange);
}

function clickOrange() {
  console.log("jump virker");
  //   document.querySelector("#orange_container").classList.remove("jump");
  document.querySelector("#orange_container").classList.add("jump");
}
