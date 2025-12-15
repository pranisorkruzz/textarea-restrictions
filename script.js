const counter = document.getElementById("counter");
const input = document.getElementById("userinput");

input.addEventListener("input", () => {
  const length = input.value.length;
  counter.textContent = `${length}/250`;

  if (length >= 250) {
    input.classList.add("limit-reached");
  } else {
    input.classList.remove("limit-reached");
  }
});
