const mod = 1e9 + 7;
const countPairs = (deliciousness) => {
  const getRecord2 = (arr) => {
    let map = new Map();
    for (const i of arr) {
      map.set(i, map.get(i) + 1 || 1);
    }
    return map;
  };
  let map = getRecord2(deliciousness); // each item occurrence map
  let res = 0;
  for (const [k, v] of map) {
    for (let i = 1; i <= 1 << 21; i *= 2) {
      // check all power of 2, max is 2 ^ 21
      let remain = i - k;
      if (remain < k) continue;
      if (map.has(remain)) {
        if (remain != k) {
          res += map.get(remain) * map.get(k);
        } else {
          res += (v * (v - 1)) / 2;
        }
      }
    }
  }
  // return res % mod;
  console.log(res % mod);
};
countPairs([1, 3, 5, 7, 9]);
