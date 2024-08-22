



let strNum = '1234567.890123'


function parseToMoney(str){
  // return str.replace(/(?=(?!\b)(\d{3})+$)/g,','); // 无小数点
  // return str.replace(/(\d)(?=(\d{3})+$)/g,'$1,'); // 无小数点
  return str.replace(/(\d)(?=(\d{3})+\.)/g,'$1,') // 有小数点
}
console.log(parseToMoney(strNum))


let num = 1234567890;
// let reg = /\d{1,3}(?=(\d{3})+$)/g;   // 无小数点
// console.log(String(num).replace(reg, '$&,')); //"1,234,567,890"

let reg = /\B(?=(\d{3})+$)/g;   
console.log(String(num).replace(reg, ',')); //"1,234,567,890"