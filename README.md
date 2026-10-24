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