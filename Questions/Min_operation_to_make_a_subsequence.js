

const minOperations = function (T, A) {
    let imap = new Map()
    lis = []
    for (let i = 0; i < T.length; i++) { 
    imap.set(T[i], i)
}
for (let i = 0; i < A.length; i++) {
    let index = imap.get(A[i])
    if (index !== undefined)
        lis[find(index, lis)] = index
}
return T.length - lis.length
};

const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
        let mid = left + right >> 1;
        if (arr[mid] < target) left = mid + 1
        else right = mid - 1
    };
    return left;
};

//test cases:

let T = [5, 1, 3];
let A = [9, 4, 2, 3, 4];

console.log(minOperations(T, A))
