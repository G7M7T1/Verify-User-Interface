const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("keydown", (event) => {
    if (event.key >= 0 && event.key <= 9) {
      if (codes[index].value != "") {
        if (index < 5) {
          codes[index + 1].focus();
        } else {
          codes[index].blur();
        }
      }
    } else if (event.key == "Backspace" && codes[index].value != "") {
      codes[index].value = "";
    } else if (event.key == "Backspace" && codes[index].value == "") {
      if (index > 0) {
        codes[index - 1].focus();
      } else {
        codes[index].blur();
      }
    }
  });
});
