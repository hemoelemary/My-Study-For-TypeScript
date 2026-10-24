const nums : number[]=[1,2,3,4]
console.log(nums)
const strs :string[]=['x','y','z']
console.log(strs)

//second flavor
const items:string[]=[]
items.push('keyboard')
console.log(items)

//different way
const people:Array<boolean>=[true,false]
console.log(people)


// Multi dimensional array / matrix / nested array
const singledi:number[]=[1,2,3,4,5]
const matrix : number[][]=[
    [1,2],
    [3,4],
    [5,6]
]
const multidi:number[][]=[[1,2,3]]
const tripledi:number[][][]=[
    [[1,2,3]]
]
console.log(singledi)
console.log(multidi)
console.log(tripledi)