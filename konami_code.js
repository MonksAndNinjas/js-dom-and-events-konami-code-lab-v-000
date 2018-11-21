let index = 0;

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//    code = [upArrow, upArrow, downArrow, downArrow, leftArrow, rightArrow, leftArrow, rightArrow, b, a]


function init(e) {
// Counts how many keys match code
  const body = document.body;
// Checks events in body
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");
      }
    } else {
      index = 0;
    }
  });
}
