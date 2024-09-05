


// K小姐的植物浇水

function countNum(x, y, z) {
  let small = Math.min(x, y)
  let big = Math.max(x, y)
  let height = 0, days = 0, load = 0
  while(height < z) {
    if (!load) {
      height += big
      load = 2
    } else {
      height += small
      load -= 1
    }
    days ++
  }
  console.log(days, height)
}

countNum(1, 2, 10);