function throwerror(msg:string):never{
    throw new Error(msg)
}
function infiniteloop():never{
    while(true){

    }
}
function neverReturns():never{
    while(true){

    }
}
const x=neverReturns();