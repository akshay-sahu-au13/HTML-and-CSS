// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1} Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} Time Complexity: O(n)
function sortArray(arr) {
    let l = arr.length;

     i = 0;
    while (i < l) {
        if (arr[i] === 0){
            let zero = arr.splice(i,1);
            arr = zero.concat(arr);
        }
        else if (arr[i] === 2){
            let two = arr.splice(i,1);
            arr.push(...two)
            i-=1
            l -=1

        }

        i++;
    };

    return arr
};

// test cases:
let arr;

arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

console.log("The sorted array is: ",...sortArray(arr));
