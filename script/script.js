function myFunction() {
  var sum = "";
  var array = document.getElementsByClassName("copy");
  for (var i = 0; i < array.length; i++) sum += array[i].innerText + "\n";

  var area = document.createElement("textarea");
  document.body.appendChild(area);
  area.value = sum.substr(0, sum.length - 1);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}
function Two(el) {
  if (el == 1) {
    document.getElementById("Two").innerHTML = "2. Взял/Крафт";
  }
  if (el == 2) {
    document.getElementById("Two").innerHTML = "2. Сдал";
  }
}
function test() {
  var full = "3. ";
  var labels = document.getElementsByTagName("LABLE");
  var inputs = document.getElementsByName("1");
  for (var i = 0; i < labels.length; i++) {
    if (inputs[i].value > 0) {
      full += " " + labels[i].innerHTML + inputs[i].value + ",";
    }
  }
  document.getElementById("Output").innerHTML = full.substr(0, full.length - 1);
  document.getElementById("Time").innerHTML =
    "4. " +
    new Date().toLocaleTimeString().slice(0, -3) +
    " " +
    new Date().toLocaleDateString();
}
