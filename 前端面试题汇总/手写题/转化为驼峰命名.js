

var s1 = "get-element-by-id"

const fn = function () {
  // \w:一位包含字母、数字、下划线的字符串。\W:一位不包含字母、数字、下划线的字符串。
  return s1.replace(/-\w/g, function(x) {
    return x.slice(1).toUpperCase()
  })
}

console.log(fn())