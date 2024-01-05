let btns = document.querySelectorAll("button");
let input = document.querySelector("input");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.innerText === "AC") {
      input.value = "";
    } else if (this.innerText === "=") {
      input.value = eval(input.value);
    } else if (this.innerText === "+/-") {
      if (Math.sign(input.value) !== -1) {
        input.value = -Math.abs(input.value);
      } else {
        input.value = Math.abs(input.value);
      }
    } else {
      input.value += this.innerText;
    }
  });
});
