class Solution {
public:
    void dfs(vector<int> candidates, int start, int target, vector<int> item, vector<vector<int>>& res)
    {
        if (target < 0) {
            return;
        }
        if (target == 0) {
            res.push_back(item);
            return;
        }
        for (int i = start; i < candidates.size(); i ++) {
            if (i > start && candidates[i] == candidates[i-1]) continue;
            item.push_back(candidates[i]);
            dfs(candidates, i + 1, target - candidates[i], item, res);
            item.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<vector<int>> res;
        vector<int> item;
        sort(candidates.begin(),candidates.end());//别忘了这一步
        dfs(candidates,0,target,item,res);
        return res;
    }
};