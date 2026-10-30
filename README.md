# TypeScript

Typescript is javascript with superpowers : typescript is more powerful version of javascript. it lets you do everything javascript does, but it adds some extra features to make your life easier when writing large programs

> npm install -g typescript
> npm install -g tsx

# Annotations

Annotation are used to specify the data type of a variable parameter , function return value, and other types of value, Annotation help developers catch errors early in development , by allowing them to specify what types of values can be assigned to a given var or passed as an argument to function

let myVar:type=value
so you should be specific in type string,number

# Type Inference
Type inference is a feature in TypeScript that allows compiler to automatically determine type of variable based on its value, if you declare a variable without explictly specify its type, typescript will try to infer typ base on value you assign to it

# Any Type

TypeScript has a special any type that can be used to represent any type. when a variable is annotated with any type, TypeScript will allow it to have any value and disable all type checking for that var

>Warning
while any type can be useful in certain situations, it should be sparingly , overuse of any can lead to untyped code and make it to catch type-related bugs during development.

# void in TypeScript

void is a type that represents the absence of any value it is often used as the return type for function that do not return a value

# never
The never keyword is used to indicate that a function will not return anything or that a variable can never have a value. the never type is useful for indicating that code paths should never be reached

never :
<ul>
<li>function always throw error</li>
<li>function has infinite loop</li>
<li>variable never have a value</li>
</ul>

# Array Types

Arrays are a type of object store multiple values of the same data type, Arrays in TypeScript are typed, which means you can specify the type of values that array can hold

> 2 types of array
> for ex :number[] string[] number[][] number[][][]
> generic Array<type>

# objects
 An object in typescript is a structured data type that represents a collection of propertis, each with a key and an associated value. the properties of an object can have specific types, and the object itself can be annotated with a type, oftend defined using an interface or a type alias. Typescript use structural typing, meaning that the shape of an object(its structure or properties) is what matters for type compatibility

 > type varname (annotation)={property:value}
 > const obj:{name:string,age:number}={name:'mohamed',age:20}

 # type aliases 

a type aliases is away to create a new name for an existing type, it allows you define a type that refers to another type and give it more meaningful name

defined using type keyword followed by equal

# optional Properties

You can make property optional in an object type by adding a question mark ? after property name

optional phone phone?:

# readonly property

readonly loc : string

> cant reassign person.location = 'something'

# intersection types

intersection type is a way to combine multiple types into a single type that includes all properties and method of each consituent type> An intersection type is denoted by & symbol

# unions
unions are used to declare a type that can have one of several possible types. unions are useful when we want to allow a variable or parameter to accept multiple types.

syntax union uses symbol => |

# literal type
literal type allows you to specify a value that can only be <b>one specific literal value</b>. this means that it can only have one specific value

> ex : let color : 'red'|'blue'|'green'

# tuples

tuple is a type that represents an array with fixed number of elements where each element has a different type. The order of types correspond to order of values in actual array.
tuple is like array but with different structure.

let tuple :[string,number]=['hello',42]

# Enums

Enum is a way to define a set of named constants. Enums allow you to define a collection of related values. can be used

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy
}
Weather condition is the name of the enum, and each of the valyes is assignes an automatic numerical value starting from 0

enum Weather{
    Sunny='sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy'
    Snowy = 'snowy'
}

> Usage :
const current = Weather.Sunny
console.log(`The current weather is ${current}`)

# Class Properties Annotation

you can annonate class properties with a type this allows you to define the data type of property and ensure it is always consistent

>Access Modifiers
you can use access modifiers to control visibilty of class members (props methods). access modifiers determine ways in which class members can be accessed 

three types:
<ul>

<li>public:can be acces anywhere inside or outside class</li> 
<li>private: within the class only</li>
<li>protected: within the class and subclassess </li>
</ul>

>Getters and setters
Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that look like a simple variable from the outside but internally has additional logic for getting and setting the value

# interface
interface is a way to define a contract for the shape of an object it specifies the properties and their types that an object must have. interface are powerful tool for enforcing structure in your code

> can be used in objects functions classes

Declaration Merging:
Once an interface is declared,it cannot be directly modified, typescript allows what is informally referred to as 'declaration mergin' or 'interface extension' as reopening

refers to ability to extend an existing declaration,can be useful when you want to add more properties or methods to exisiting interface

> wa have now name and model

interface car{
    name:string
}
interface car{
    model:string
}

