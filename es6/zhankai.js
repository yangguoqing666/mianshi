console.log(111)
// 展开运算符
//浅拷贝
let a = [1,2];
let b = [...a];
console.log(b)
//合并
let c = [...a,3,4];
console.log(c)
//剩余参数
function test(a,...rest){
    console.log(rest)
}
test(1,2,3,4)
let obj = {a:1,b:2};
let objcopy = {
    c:3,
    ...obj
}
// 数组 
// 1.forEach()  对象数组可以被改变[{},{}]
// 2.map()
// 3.filter()
// 4.reduce()
// 5.some()
// 6.every()
// 7.all()方法

let arr = [1,'a','bb'];
arr.forEach((item,index)=>{
    index = 'cc'
    
})
arr.filter((item)=>{
    console.log(item,'item')
    // console.log(index,'index')
})
//解构实现两个值之间的互换
let a_=['a','aa'];
let b_ = ['b','bbbb','bb'];
 [a_,b_] = [b_,a_];
console.log(a_)