/**
 * 连续出牌数量
 * 题目描述

  有这么一款单人卡牌游戏，牌面由颜色和数字组成，颜色为红、黄、蓝、绿中的一种，数字为0-9中的一个。游戏开始时玩家从手牌

  中选取一张卡牌打出，接下来如果玩家手中有和他上一次打出的手牌颜色或者数字相同的手牌，他可以继续将该手牌打出，直至手牌

  打光或者没有符合条件可以继续打出的手牌。

  现给定一副手牌，请找到最优的出牌策略，使打出的手牌最多。
  输入描述

输入为两行

第一行是每张手牌的数字，数字由空格分隔，
第二行为对应的每张手牌的颜色，用r y b g这4个字母分别代表4种颜色，字母也由空格分隔。
手牌数量不超过10。

输出描述

输出一个数字，即最多能打出的手牌的数量。

用例

输入

1 4 3 4 5

r y b b r

输出

3

说明

如果打（1, r）-> (5, r)，那么能打两张。

如果打（4，y) -> (4, b) -> (3, b)，那么能打三张。

输入

1 2 3 4

r y b l

输出

1

说明

没有能够连续出牌的组合，只能在开始时打出一张手牌，故输出1
*/

//并查集模板
class UF {
  constructor(n) {
      this.count = n
      this.item = new Array(n)
      for(let i=0;i<n;i++) {
          this.item[i]=i
      }
  }
  find(x) {
      if (x !== this.item[x]) {
          return (this.item[x] = this.find(this.item[x]))
      }
      return x
  }
  union_connect(x, y) {
      let x_item = this.find(x)
      let y_item = this.find(y)
  
      if (x_item !== y_item) {
          this.item[y_item] = x_item
          this.count--
      }
  }
}
function main(cards,colors){
  let n = cards.length;
  let uf = new UF(n);
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (cards[i] === cards[j] || colors[i] === colors[j]) {
              uf.union_connect(i, j);
          }
      }
  }
  let result = {};
  for (let i = 0; i < n; i++) {
      let f = uf.find(i);
      result[f] ? result[f]++ : (result[f] = 1);
  }
  console.log(Object.values(result).sort((a, b) => b - a)[0]);
}
// main([1, 4 ,3, 4 ,5], ["r", "y", "b", "b" ,"r"])



function maxPoke(nums, colors) {
    const len = nums.length;
    // 记录用过的牌
    const vis = new Array(len).fill(false);

    function dfs(num, color) {
        let max = 0;
        // 枚举获取每张牌作为第1 ~ len次出时可以打出的最大数量
        for (let i = 0; i < len; i++) {
            if (vis[i]) continue;
            const n = nums[i];
            const c = colors[i];
            // -1表示当前正在寻找第一张牌，任何花色和数字都可以
            if (n === num || c === color || num === -1) {
                vis[i] = true;
                max = Math.max(1 + dfs(n, c), max);
                vis[i] = false;
            }
        }
        return max;
    }
    return dfs(-1, -1);
}

const maxPoke1 = (cards, colors) => {
    const len = cards.length;
    let visited = new Array(len).fill(false);

    const dfs = (card, color) => {
        let max = 0;
        for (let i = 0; i < len; i ++) {
            if (visited[i]) {
                continue;
            }
            const n = cards[i];
            const c = colors[i];
            if (card === -1 || card === n || color === c) {
                visited[i] = true;
                max = Math.max(1 + dfs(n, c), max);
                visited[i] = false;
            }
        }
        return max;
    }
    return dfs(-1, -1);
}

console.log(maxPoke1([1, 4, 3, 4, 5, 4], ['r', 'y', 'b', 'b', 'r', 'y']));  // Output should be 4
