export const table = (width = 2,height = width) => {
let repeatStr = (str, n) => { 
    let x = "";
    for (let i = 0; i < n; i++) {
      x += str;
    }
    return x;
  }
let string = repeatStr(" #", width);
let oddString = repeatStr("# ", width);
  for (let i = 1; i <= height; i++) {
    if (i % 2 !== 0) {
      console.log(string);
    } else {
      console.log(oddString);
    }
  }
};
