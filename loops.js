function forLoop(array) {
  for(i = 0; i < 25; i++) {
    if(i == 0) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n)
    n--;
  }
  return(`done`);
}

function doWhileLoop(array) {
  i = array.length;
  do {

  } while(array.length > 0 && maybeTrue())
}

function maybeTrue() {
  return Math.random() >= 0.5
}
