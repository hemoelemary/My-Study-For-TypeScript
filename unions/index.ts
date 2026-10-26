let password : string | number = 'something' // or 123
type userInfo = {
    name:string,
    age:number
}
type accountdet = {
    email : string,
    password :string
}
let user:userInfo|accountdet={
    name:'mohamed',
    age:12
}
console.log(user)

const items:(number|string)[]=[1,'name']
console.log(items)
export{};