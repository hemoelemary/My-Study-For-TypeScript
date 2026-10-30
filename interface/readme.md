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

