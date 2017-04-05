
function forLoop(array) {
  for (let counter = 0; counter < 26; counter++)
    if (counter === 1) {
      array.push("I am 1 strange loop");
      }
      else if (counter > 1) {
          array.push(`"I am ${counter} strange loops"`);
        }
    return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  } if (n === 0) {
    return "done";
  }
  }

  function maybeTrue() {
    return Math.random() >= 0.5
}

function doWhileLoop(array) {
    do {
      array.pop()
    }  while (maybeTrue() && array.length >=0);
    return array;
}
