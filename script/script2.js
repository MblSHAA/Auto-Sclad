document.querySelector("#OK").addEventListener("click", myClick);

function myClick() {
  let a = document.querySelector("#name").value;
  console.log(a);
  document.querySelector("#Name-game").innerHTML = a;
}
