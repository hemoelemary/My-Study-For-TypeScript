type userinfo = {
    first:string,
    last?:string,
    age:number
}
type account={
    readonly email:string;
    password:string;
    
}

type user = userinfo&account

const hamoda : user = {first:'hamoda',age:20,email:'hamoda@gmail.com',password:'123'}
export {};