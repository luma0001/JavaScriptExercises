window.addEventListener("load", start);

function start() {
  console.log("start viker");
  document
    .querySelector("#blue_container")
    .addEventListener("click", clickBlue);
}

function clickBlue() {
  console.log("jump virker");
  document.querySelector("#blue_container").classList.add("fallover");
}
