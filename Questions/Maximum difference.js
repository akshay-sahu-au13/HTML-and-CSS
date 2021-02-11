// Given an unsorted array, find the maximum difference between the successive elements in
// its sorted form.
// // Return 0 if the array contains less than 2 elements.
const maxmDiff = (arr) => {

    arr.sort((a, b)=> a - b);
    let maxDiff;
    let res = 0;
  
    for (let i = 1; i < arr.length; i++){
        maxDiff = arr[i] - arr[i-1]
        res = Math.max(maxDiff, res)
    };
    return res;
  };
  
  //Driver code:
  let arr;
  
  console.log(`
  Test Case 1
  `)
  
  arr = [40, 100, 1, 5, 25, 10];
  
  console.log(`The Maximum difference between successive elements of Array: [ ${arr} ] in it's sorted form is "${maxmDiff(arr)}"`)
  
  console.log(`
  Test Case 2
  `)
  
  arr = [4, 10, 1, 3, 25, 12];
  
  console.log(`The Maximum difference between successive elements of Array: [ ${arr} ] in it's sorted form is "${maxmDiff(arr)}"`)
  
  console.log(`
  Test Case 3
  `)
  
  arr = [10]; // Array contains less than 2 elements
  
  console.log(`The Maximum difference between successive elements of Array: [ ${arr} ] in it's sorted form is "${maxmDiff(arr)}"`)