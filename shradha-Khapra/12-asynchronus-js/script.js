//setTimeout

function hello() {
  console.log("hello");
}

// setTimeout(hello, 4000);
// we can write function inside by arrow function
setTimeout(() => {
  console.log("hello");
}, 4000);

//so js has to wait for four second after to run further code ,no becuase first below code print untill four second not complete this is called asynchronous programming
console.log("one");
console.log("two");

//callback

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 3, sum);

calculator(1, 3, (a, b) => {
  console.log(a + b);
});

//set timeout also take callback

const hello = () => {
  console.log("hello");
};
setTimeout(hello, 400);

// callback hell

function getData(dataId, getNextData) {
  // we want after 2sec
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//we want each data after 2 sec but what happen after first 2 sec all the data we get
//so what happen first getData set time and go to next and similarly second and third and all three time start so after 2sec we get data all three.
//but we want the individual delay for data. for that one way is used call back.
// getData(2);
// getData(3);
// getData(4);
//lets create an another callback inside the getData and call it
//getData(2,getData(3));// this give error becuase we know callBack function are pass without brackets ,here it is call immedialty the function and giv outpuut.
//we used call back once again

// getData(2, () => {
//   getData(3); // problem still there at 2 we pass callback but not at time 3 so we make a check condition in main code.
// });
getData(2, () => {
  getData(3, () => {
    getData(4, () => {
      getData(5);
    });
  });
});
// we can see that it look very difficult and hard to understand.
//this problem where developer itself have to difficulty to understand is called callback hell.

//Promise:

let promise = new Promise((resolve, reject) => {
  console.log("I am promise");
  resolve("success");
});

// promiese use:

const getPromise = () => {
  return new promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // reject('error');
  });
};
let promises = getPromise();
promises.then((res) => {
  console.log("promise fullfilled", res); // it will show what we pass in reslove
});

// promises.catch((err,err) => {
//   console.log("rejected",err);
// });

// Promise Chaining

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("detail1");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

//second api

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("detail2");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data2");
// let p2 = asyncFunc1();
// p2.then((res) => {
//   console.log(res);
// });

// now i want first the api one give data and then api second
// but this not happen i actual think is when the first fetch data .. print and it go for p1 to get promise but still it is asybchnronous and we move further then .then but p1 is in pending state and go for fetching data 2.. and similar think happen to promise 2 and both print at same time.
// but we want first data one fetch then second data go for fetch.
// so for that we can do chaning
// means use one then inside other then like any website if username found then go for passward.

console.log("fetching data1");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data2");
  let p2 = asyncFunc1();
  p2.then((res) => {
    console.log(res);
  });
});

//Async

async function hello() {
  console.log("hello");
}
//async function will return a promise

function getData2(dataId) {
  setTimeout(() => {
    console.log(dataId);
  }, 2000);
}

async function data() {
  await getData2(2);
  await getData2(3);
}
//IFIE:
(async function () {
  await getData2(2);
  await getData2(3);
})();
