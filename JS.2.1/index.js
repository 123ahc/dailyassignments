//------------------------
// Problem 1
//------------------------

let x = 30;
let y = 20;
let z = true;

if(x > y) {
  z = true;
} else {
  z = false;
}

console.log(z);

//------------------------
// Problem 2
//------------------------

let a = "10% off!";
let b = "Love it!";
let c = true;

if(a !== b) {
  c = true;
} else {
  c = false;
}

console.log(c);

//------------------------
// Problem 3
//------------------------

let d = 5;
let e = 5;
let f = true;

if(d > e) {
  f = false;
} else {
  f = true;
}

console.log(f);

//------------------------
// Problem 4
//------------------------

let g = 0;
let h = 50;
let i = 20;
let j = true;

if(g < i) {
  if(i < h) {
    j = true;
  } else {
    j = false;
  }
} else {
  j = false;
}

console.log(j);

//------------------------
// Problem 5
//------------------------

let k = 1000;
let l = -12;
let m = "-12";
let n = true;

if(k < l) {
  n = false;
}
else if(l > k) {
  n = false;
}
else if(l === m) {
  n = false;
} else {
  n = true;
}

console.log(n);
//------------------------
// Problem 6
//------------------------

let o = 20;
let p = 20;
let q = true;

if(o === p) {
  q = true;
} else {
  q = false;
}

console.log(q);

//------------------------
// Problem 7
//------------------------

let r = 12 > 2 ? true : false;

console.log(r);

//------------------------
// Problem 8
//------------------------

let s = "Hello!" !== "Hello!" ? false : true;

console.log(s);

//------------------------
// Problem 9
//------------------------

let t = 50 === "50" ? false : true;

console.log(t);

//------------------------
// Problem 10
//------------------------

let u = 5 === 5 ? true : false;

console.log(u);