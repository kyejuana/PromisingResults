// const promise = slowMath.add(6,2)
// .then(a => {
//     console.log(a)
//     return slowMath.multiply(a,2)
// })
// .then(b => {
//     console.log(b)
//     return slowMath.divide(b,4)
// })
// .then(c => {
//     console.log(c)
//     return slowMath.subtract(c,3)
// })
// .then(d => {
//     console.log(d)
//     return slowMath.add(d,98)
// })
// .then(e => {
//     console.log(e)
//     return slowMath.remainder(e,2)
// })
// .then(f => {
//     console.log(f)
//     return slowMath.multiply(f,50)
// })
// .then(g => {
//     console.log(g)
//     return slowMath.remainder(g,40)
// })
// .then(h => {
//     console.log(h)
//     return slowMath.add(h,32)
// })
// .then(i => {
//     console.log("The final result is " + i)
// })
// promise.catch((err) => {
//     console.log("An error has been made. Pardon the mistake!")
//     console.log(err)
// })

async function doMath(){
try{
    let result = await slowMath.add(6,2)
    console.log 

    let result2 = await slowMath.multiply(result, 2)
    console.log

    let result3 = await slowMath.divide(result, 4)
    console.log

    let result4 = await slowMath.subtract(result, 3)
    console.log

    let result5 = await slowMath.add(result, 98)
    console.log

    let result6 = await slowMath.remainder(result, 2)
    console.log

    let result7 = await slowMath.multiply(result, 50)
    console.log

    let result8 = await slowMath.remainder(result, 40)
    console.log

    let result9 = await slowMath.add(result, 32)
    console.log

    let result10 = console.log("The final result is " + result)
    
} catch(err) {console.error(err)}
}
async function error () {
    await Promise.reject(new Error("An error has been made. Pardon the mistake!"))
}
//I don't know what I have done wrong. It's not doing anything.

