// ---------  simple async fun
// called randomly
// function printString(string){

//   setTimeout(
//     () => {
//       console.log(string)
//     }, 
//     Math.floor(Math.random() * 1000) + 1
//   )
// }
// function printAll(){
//   printString("A")
//   printString("B")
//   printString("C")
// }
// printAll()

// ---------------------------------------------------------
// callback funtions 

// function printString(string, callback){
//   setTimeout(
//     () => {
//       console.log(string)
//       callback()
//     }, 
//     Math.floor(Math.random() * 1000) + 1
//   )
// }

// function printAll(){
//   printString("A", () => {
//     printString("B", () => {
//       printString("C", () => {})
//     })
//   })
// }
// printAll()

// The problem with callbacks is it creates something called “Callback Hell.”
// Basically, you start nesting functions within functions within functions, 
// and it starts to get really hard to read the code.

// ---------------------------------------------------------
// Promise function 
// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         console.log(string)
//         resolve()
//       },
//       Math.floor(Math.random() * 1000) + 1
//     )
//   })
// }
// function printAll() {
//   printString("A")
//     .then(() => {
//       return printString("B")
//     })
//     .then(() => {
//       return printString("C")
//     })
// }
// printAll()
// ---------------------OR
// function printAll(){
//   printString("A")
//   .then(() => printString("B"))
//   .then(() => printString("C"))
// }
// printAll()

// ---------------------OR
// ---------- Await is basically syntactic sugar for Promises. 
// async function printAll(){
//   await printString("A")
//   await printString("B")
//   await printString("C")
// }
// printAll()
