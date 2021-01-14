
const minCharacters = function(a, b) {
    let n1 = a.length;
    let n2 = b.length;
    let res = n1+n2;
    let cnt1 = [...Array(26)].fill(0);
    let cnt2 = [...Array(26)].fill(0);

    for (let aa of [...a]) {
        cnt1[aa.charCodeAt(0) - 'a'.charCodeAt(0)]++;
     }
     for (let bb of [...b]) {
        cnt2[bb.charCodeAt(0) - 'a'.charCodeAt(0)]++;
         cnt2[bb-'a']++;
    }
          
    for (let i=0; i<26; i++) {
        if(i>0) // only starts from 'b', because we cannot decrease 'a'
        {
            // case1: a is strictly less than b
            // a: the letters < "i"
            // b: the letters >= "i"
            let r = 0;
            for(let j = 0; j<i; j++)
            {
                r += cnt1[j];
            }
            for(let j = i; j<26; j++)
            {
                r += cnt2[j];
            }
            res = Math.min(res, r);
            // case2: b is strictly less than a
            // a: the letters >= "i"
            // b: the letters < "i"
            r = 0;
            for(let j = i; j<26; j++)
            {
                r += cnt1[j];
            }
            for(let j = 0; j<i; j++)
            {
                r += cnt2[j];
            }
            res = Math.min(res, r);
        }
        // case 3: all unique letter equal to "i"
        r = 0;
        for(let j = 0; j<26; j++)
        {
           if(j !== i)
           {
               r += cnt1[j];
               r += cnt2[j];
           }
        }
         res = Math.min(res, r);
    }
    return res;
};

// driver code

let a = 'aba';
let b = 'caa'
console.log('The minimum cost to perform the task is: ',minCharacters(a, b))
