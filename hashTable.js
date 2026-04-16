// Qs. Find occurance from the array using hasmap

let arr = [1, 2, 3, 2, 3, 1, 4, 4, 5];

let countMap = {};

arr.forEach((elem) => {
  if (countMap[elem] === undefined) {
    //if countMap doesn't have that value then add with '1'
    countMap[elem] = 1;
  } else {
    // if same element found then increase
    countMap[elem]++;
  }
});

for (let key in countMap) {
  console.log(`element ${key} occurs ${countMap[key]} times`);
}
