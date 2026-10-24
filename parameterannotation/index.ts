// Regular Func
function addOne(num:number){
    return num + 1 ;
}

const result:number=addOne(3)
const double = (x:number=2,y:number=19)=>x*y
const res = double(2,10)
console.log(res)

function greet(person:string='anonymous'){
    return `hello, ${person}`
}

console.log(greet('hamoda'))

function sum(x:number=2,y:number=1):number{
    return x+y
}
console.log(sum(3,9))

const c = (x:number=5,y:number=5):number=>{
    return x*y
}