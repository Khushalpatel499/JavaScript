const checkDogs = function (dogsJulia, dogskate) {
  //   const dogsJuliaCopy = dogsJulia.slice(1, dogsJulia.length - 2);
  const dogsJuliaCopy = dogsJulia.slice();
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
  //   const correctData = [...dogsJuliaCopy, ...dogskate];
  const correctData = dogsJuliaCopy.concat(dogskate);
  correctData.forEach(function (val, i) {
    if (val >= 3)
      console.log(`Dog Number ${i + 1} is an adult, and is ${val} year old`);
    else console.log(`Dog Number ${i + 1} is an puppy🐶`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
