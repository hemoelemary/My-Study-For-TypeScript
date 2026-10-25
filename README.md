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