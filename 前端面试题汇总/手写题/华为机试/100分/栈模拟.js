/**
 * 扑克牌出现三次相同数抵消，输出剩下的数
*/

const main = (list) => {
  let map = {};
  for (let i = 0; i < list.length - 1; i ++) {
    const num = list[i];
    if (!map[num]) {
      map[num] = [];      
    }
    map[num].push(i);
    if (map[num].length === 3) {
      list.splice(i, 1);
      list.splice(map[num][1], 1);
      list.splice(map[num][0], 1);
      i -= 3;
    }
  }
  console.log(list.join());
}

main([2, 3, 3, 4, 4, 4, 3, 5]);