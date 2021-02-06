var checkPartitioning = function(s) {
    var n = s.length; 
    var dp = new Array(n).fill(null);
    dp = dp.map(el=>new Array(n).fill(false));
    
    for(var i=0;i<n;i++)
    {
        dp[i][i] = true;
        if(i<n-1 && s[i] === s[i+1])
        {
            dp[i][i+1] = true;
        }
    }
    for(var len = 3; len<=n; len++)
    {
        for(var i = 0; i<n-2; i++)
        {
            var j=i+len-1;
            dp[i][j] =  s[i] === s[j] && dp[i+1][j-1];
            
        }
    }
    for(var i = 1; i<n;i++)
        for(var j = i+1; j<n; j++)
        {
            if(dp[0][i-1] && dp[i][j-1] && dp[j][n-1])
                {
                    console.log("yes");
                }
        }
    return false
};
checkPartitioning("abcbdd");
