//  这道题还有另一种解法，是利用牛顿迭代法，记得高数中好像讲到过这个方法，是用逼近法求方程根的神器，在这里也可以借用一下.
//  经过(xi, f(xi))这个点的切线方程为f(x) = f(xi) + f’(xi)(x - xi)，其中f'(x)为f(x)的导数，本题中为2x。令切线方程等于0，即可求出xi+1=xi - f(xi) / f'(xi)。
//  继续化简，xi+1=xi - (xi2 - n) / (2xi) = xi - xi / 2 + n / (2xi) = xi / 2 + n / 2xi = (xi + n/xi) / 2。

class Solution {
public:
    int mySqrt(int x) {
      if (x == 0) return 0;
      double last = 0;
      double res = 1;
      while (res != last)
      {
          last = res;
          res = (res + x / res) / 2;
      }
      return int(res);
    }
};