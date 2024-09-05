/**
 * 题目描述

给一个字符串，表示用’,’分开的人名。

然后给定一个字符串，进行快速人名查找，符合要求的输出。

快速人名查找要求︰人名的每个单词的连续前几位能组成给定字符串，一定要用到每个单词。
输入描述

第一行是人名，用’,’分开的人名

第二行是 查找字符串

输出描述

输出满足要求的人名

用例

输入

zhang san,zhang san san

zs

输出

zhang san

描述

无

输入

zhang san san,zhang an sa,zhang hang,zhang seng,zhang sen a

zhas

输出

zhang an sa,zhang seng

描述

无
*/

function dfs(single_names, position, pattern, pattern_position) {
  if (pattern_position >= pattern.length) {
      return position >= single_names.length;
  }
  if (position >= single_names.length) {
      return pattern_position >= pattern.length;
  }
  if (single_names[position][0] != pattern[pattern_position]) {
      return false;
  }
  let index = 1;
  while (index < single_names[position].length && pattern_position + index < pattern.length 
      && single_names[position][index] == pattern[pattern_position + index]) {
      if (dfs(single_names, position + 1, pattern, pattern_position + index + 1)) {
          return true;
      }
      index += 1;
  }
  return dfs(single_names, position + 1, pattern, pattern_position + 1);
}
function main(names, pattern){
  const nameList = names.split(',');
  let output_str = "";
  let i = 0;
  while(true){
    if(i >= nameList.length){
        break;
    } else {
        let single_names = nameList[i].split(" ");
        if ((single_names.length > pattern.length)){
            i += 1;
            continue;
        } else {
            if (dfs(single_names, 0, pattern, 0)) {
                output_str += nameList[i] + ",";
            }
        }
    }
    i += 1;
  }

  console.log(output_str.substr(0,output_str.length-1));
  return;
}

main("zhang san, zhang san san", "zs")
main("zhang san san,zhang an sa,zhang hang,zhang seng,zhang sen a", "zhas")