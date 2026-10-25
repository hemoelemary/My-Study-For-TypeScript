const person:{firstName:string;lastname:string;age:number}={
    firstName:'John',
    lastname:'Doe',
    age:69
}
console.log(person.firstName)

// using functions
function printUser():{name:string;age:number;location:string}{
return {
    name:'Hamoda',
    age:20,
    location:'Egypt'
}
}
console.log(printUser())