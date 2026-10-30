interface Computer{
    name:string;
    ram:number;
    hdd:number
}

const computerexp :Computer={
name:'u7',
ram:8,
hdd:100
}
console.log(computerexp.name)


interface Movie{
    readonly name:string;
    ratings:number;
    genre?:string;
}

const movie1:Movie = {
    name:'starwars',
    ratings:8.9,
    genre:'action'
}
console.log(movie1.name)
// movie1.name='' error

interface Mathe{
    (x:number,y:number):number
}
const add:Mathe = (a,b)=>a+b
const subtract:Mathe = (a,b)=>a-b
console.log(add(2,2))

interface Person{
    first:string;
    last:string;
    age:number;
    sayHello():void;
}
function greet(person:Person){
    return person
}
console.log(greet({first:'hamoda',last:'emary',age:20,sayHello:()=>'hello'}))


interface Song{
    name:string,
    singer:string,
    printInfo(name:string):string
}
const song1:Song = {
    name:'song',
    singer:'sam',
    printInfo:(name:string)=>name
}

console.log(song1.printInfo('natural'))

interface MovieDet{
    readonly name:string;
    ratinfs:number;
    printmovie(name:string,price:number):string|number
}

interface MovieGenre extends MovieDet{
    Genre:string;
}
const movie4:MovieGenre={
    name:'name',
    ratinfs:4,
    printmovie:(name,price)=>name+price,
    Genre:''
}
console.log(movie4.printmovie('',2))

// interfaces with classes
interface Vehicle{
    start():void;
    stop():void;
}
class car implements Vehicle{
    start():void{
        console.log('car start')
    }
    stop():void{
        console.log('car stop')
    }
}

const myCar = new car()
myCar.start()
myCar.stop()

interface o{
    name:string
}
interface o {
    l:number
}
const obje: o = {
    name:'',
    l:2
}
