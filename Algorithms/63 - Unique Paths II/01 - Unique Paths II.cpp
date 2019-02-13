/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 特别提示:此题不同于走迷宫,来到一点只能选择向下或向右走或退回,用递归直接超时,所以选择动态规划

class Solution {
public:
    /**
     * @param obstacleGrid: A list of lists of integers
     * @return: An integer
     */
    int uniquePathsWithObstacles(vector<vector<int> > &obstacleGrid) {
        // write your code here
        int lc = obstacleGrid[0].size();
        int lr = obstacleGrid.size();

        long long int a[100][100];
        memset(a, 0, sizeof(a));
        for(int i = 0; i < lc; i++) {
            if(0 == obstacleGrid[0][i])
                a[0][i] = 1;
            else
                break;
        }

        for(int i = 0; i < lr; i++) {
            if(0 == obstacleGrid[i][0])
                a[i][0] = 1;
            else
                break;
        }

        for(int i = 1; i < lr; i++){
            for(int j = 1; j < lc; j++){
                if(obstacleGrid[i][j] == 0)
                    a[i][j] = a[i-1][j] + a[i][j-1];
                else
                    a[i][j] = 0;

            }
        }
        return a[lr-1][lc-1];
    }
};