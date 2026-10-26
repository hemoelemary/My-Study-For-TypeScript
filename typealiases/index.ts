type user = {
    name:string,
    age:number,
    location:string
}
const printUserInfo = (user:user)=>{
return `name : ${user.name} age:${user.age} loc:${user.location} `
}

const res:string = printUserInfo({name:'hamoda',age:20,location:'egypt'})
console.log(res)


type Person = {
    name:string,
    age:number,
    readonly location:string,
    phone?:string //optional
}
const person:Person={name:'mo',location:'damietta',age:20}
// cant reassign person.location = 'something'
console.log(person)