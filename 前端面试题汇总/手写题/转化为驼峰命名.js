

var s1 = "get-element-by-id"

const fn = function () {
  return s1.replace(/-\w/g, function(x) {
    return x.slice(1).toUpperCase()
  })
}

fn()