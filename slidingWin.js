// let arr = [10, 20, 30, 40];
// let k = 2;
// let low = 0;
// let high = k-1;
// let res = 0;
// let sum = 0;
// let n = arr.length;

// for (let i = 0; i <= high; i++) {
//   sum += arr[i];

//   while (high < n) {
//     res = max[(res, sum)];
//     //sliding window
//     low++; //(low-1)
//     high++; //(high)

//     if (high == n) {
//       break;
//     }

//     sum = sum - arr[low - 1];
//     sum = sum + arr[high];
//   }
//   return res;
// }
let arr = [10, 20, 30, 40];
let k = 2;

let n = arr.length;
let low = 0;
let high = k - 1;
let sum = 0;
let res = 0;

// calculate first window sum
for (let i = low; i <= high; i++) {
  sum += arr[i];
}

res = sum;

// slide the window
while (high < n - 1) {
  low++;
  high++;
  
    //10 +20 = 30
  sum = sum - arr[low - 1]; // remove previous element (remove 10)
  sum = sum + arr[high];    // add new element (20 + 30 = 50)

  res = Math.max(res, sum);
}

console.log(res);