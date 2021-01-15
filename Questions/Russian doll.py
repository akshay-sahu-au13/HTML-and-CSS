class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        if not envelopes or len(envelopes) == 0:
            return 0
        
        envelopes = sorted(envelopes, key=lambda x:(x[0], x[1]))
        n = len(envelopes)
        dp = [1 for _ in range(n)]
        maxEnvelopes = 1
        
        for i in range(n):
            for j in range(i+1, n):               
                if envelopes[j][0] > envelopes[i][0] and envelopes[j][1] > envelopes[i][1]:
                    dp[j] = max(1 + dp[i], dp[j])
                    maxEnvelopes = max(maxEnvelopes, dp[j])
                
        return maxEnvelopes