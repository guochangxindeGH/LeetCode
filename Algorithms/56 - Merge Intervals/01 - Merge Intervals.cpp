/**
 * Definition for an interval.
 * struct Interval {
 *     int start;
 *     int end;
 *     Interval() : start(0), end(0) {}
 *     Interval(int s, int e) : start(s), end(e) {}
 * };
 */
class Solution {
public:
    struct cmp {
        bool operator()(const Interval a, const Interval b)const{
            return a.start < b.start;
        }
    };
    vector<Interval> merge(vector<Interval>& intervals) {
        int len = intervals.size();
        if (intervals.empty()) return {};
        sort(intervals.begin(), intervals.end(), cmp());
        vector<Interval> res;
        res.push_back(intervals[0]);
        for (int i = 1; i < len; i ++) {
            Interval& back = res.back();
            if (res.back().end < intervals[i].start) {
                res.push_back(intervals[i]);
            } else {
                res.back().end = max(res.back().end, intervals[i].end);
            }
        }
        return res;
    }
};