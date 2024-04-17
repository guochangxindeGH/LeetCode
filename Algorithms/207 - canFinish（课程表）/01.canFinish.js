/**
 * 207. 课程表
 * 
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

 

示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
示例 2：

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let allList = new Array(numCourses).fill(0);
  let map = {};
  for (let i = 0; i < prerequisites.length; i ++) {
    allList[prerequisites[i][0]] ++;
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  let queue = [];
  for (let i = 0; i < allList.length; i ++) {
    if (allList[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length) {
    const index = queue.shift();
    count ++;
    const cur = map[index];
    if (cur && cur.length) {
      for (let i = 0; i < cur.length; i ++) {
        allList[cur[i]] --;
        if (allList[cur[i]] === 0) {
          queue.push(cur[i]);
        }
      }
    }
  }
  return count === numCourses;
};