var russianDoll = function(envelopes) {
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    const dp = new Array(envelopes.length); 
    dp.fill(1);
    let max = 0;
    for (let i = 0; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};

//Driver code
let envelopes = [[5,4],[6,4],[6,7],[2,3]];
console.log(russianDoll(envelopes));

envelopes = [[5,5],[6,4],[9,7],[2,3], [1,1]];
console.log(russianDoll(envelopes));
