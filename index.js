function bar() {
  console.log("bar");
}
function foo() {
  setTimeout(bar, 0);
  for (let i = 0; i < 300; i++) {
    let i = 5 + 8 + 8 + 8;
    console.log(i);
  }
}
foo();

function executor(resolve, reject) {
  let rand = Math.random();
  console.log(1);
  console.log(rand);
  if (rand > 0.5) resolve();
  else reject();
}
var p0 = new Promise(executor);

var p1 = p0.then((value) => {
  console.log("succeed-1");
  return new Promise(executor);
});

var p3 = p1.then((value) => {
  console.log("succeed-2");
  return new Promise(executor);
});

var p4 = p3.then((value) => {
  console.log("succeed-3");
  return new Promise(executor);
});

p4.catch((error) => {
  console.log("error");
});


new Promise((resolve => {

}, reject => {
    
}))
