class Person {
    readonly name:string;
    age:number;
    constructor (name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
const person = new Person('john',20);
console.log(person)



class Person2{
    private f :string;
    public l :string;
    protected age : number;
    constructor(f:string,l:string){
        this.f = f
        this.l=l
        this.age = 0
    }
    getName():string{
        return `${this.f} ${this.l}`
    }
}

let p1 = new Person2('hemo','emary')
console.log(p1)
console.log(p1.getName())

class Hamoda extends Person2{
    constructor(f:string,l:string,age:number){
        super(f,l)
        this.age=age
    }
    getHamodaAge(){
        console.log(this.age)
    }
}

const hamoda = new Hamoda('mohamed','ayman',20)
hamoda.getHamodaAge()


class MyClass{
    private _myProperty:number = 0
    get myProperty():number{
        return this._myProperty
    }
    set myProperty(value:number){
        this._myProperty=value
    }
}
// in es6 private is used by #
const myInstance = new MyClass()
myInstance.myProperty=20
console.log(myInstance.myProperty)

class SecondClass{
    private _prop:(string|number)='';
    get myProperty():(string|number){
        return this._prop
    }
    set myProperty(val){
        this._prop=val
    }
}

const s = new SecondClass()
s.myProperty=12
console.log(s.myProperty)

export {};
