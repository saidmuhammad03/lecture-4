//task 1

// const get=(nam)=>` Hello ${nam}`
// console.log(get("Munir"));

//task2
// const get=(harf)=>{
//     if(harf.includes("salom")) {
//         return true }
//     else{
//      return false }
// }
// console.log(get("world salom"));

// task4
// function get(str){
     
//        let result= str.split("-")
//        return result.length
// }

// console.log(get("man-kalon-meshavam-dar"));
function get(num,text=1){
   if(num==text)
   {
      return num
   }
    return `${text}-${get(num,text+1)}`
}
console.log(get(11));




