// Average Calculator
document.getElementById("Cal-btn").addEventListener("click", calArea);

function calArea() {
  // Input
  let topbase = +document.getElementById("topbase-input").value;
  let bottombase = +document.getElementById("bottombase-input").value;
  let height = +document.getElementById("height-input").value;

  // Process
  let area = (1 / 2) * (topbase + bottombase) * height;
  let a = area.toFixed(2);
  area = a;
  // Output
  document.getElementById("output").innerHTML = area;

  // Clear input
  document.getElementById("topbase-input").value = "";
  document.getElementById("bottombase-input").value = "";
  document.getElementById("height-input").value = "";

  // Add class and image
  document.getElementById("output").classList.add("green");
  document.getElementById("image").src = "Images/CheckMark.webp";
}
