
let parentDiv=document.querySelector(".top-slection-nav-mid")
      console.log(parentDiv.children)
function changeStyle(id){   //underline2
   for(let i=0 ; i<parentDiv.children.length ; i++){
      console.log(id)
   let parent=document.querySelector("#"+parentDiv.children[i].id)
   let complete=document.querySelector("#"+id)
   console.log(complete)

   console.log(parent.id)
   if(parent.id==id){
      parent.classList.add("btn-active")
      
   }
   else{
      parent.classList.remove("btn-active")
   }
  

   }
}
   function checkIfThere(arr,val){
    //code
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i]==val){
            return true
            
        }
  
        
    }
    return false

}




function healthCenter(){
   let box=document.querySelector(".healthcenter")
   console.log(box.classList)
   if(box.classList.contains("box")==false){
      box.classList.add("box")
   }
   else{
      box.classList.remove("box")
   }
   


}
function becomeHost(){
   let box=document.querySelector(".Become-host")
   console.log(box.classList)
   if(box.classList.contains("box2")==false){
      box.classList.add("box2")
   }
   else{
      box.classList.remove("box2")
   }
   


}
// function double(num) {
//   return num*2
// }

// console.log(double(4)); // Output: 8

// function divisibleBy5(num) {
//   if(num%5==0){
//    return true
//   }
//   else{
//    return false
//   }
// }

// console.log(divisibleBy5(2)); // Output: Yes
// console.log(divisibleBy5(7));  // Output: No

// function lastChar(str) {
   
//       return str[str.length-1]
 
//    // your code here
// }

// console.log(lastChar("hellp")); // Output: o
// function maxOfTwo(a, b) {
//   if(a>b){
//    return (a)// your code here
// }
// else{
//    return (b)
// }
// }

// console.log(maxOfTwo(100, 10)); // Output: 10 
// function repeatStr(str, times) {
//    for(let o=0 ; o<times;o++){
//       console.log(str+times)
//    }
//    // console.log(times)
//   // your code here
// }

// console.log(repeatStr("hii", 4)); // Output: "hihihi"


// let count=0
// function maxarr(arr) {
//    // console.log(arr)
//    for(let p=0; p<arr.length ; p++){
      
//       if(arr[p]> count){
//          count=arr[p]
      
        
//       }
//    }
// return count
   
// }
// console.log(maxarr([1,12,4,91,7]))

// function sumArray(arr) {
// console.log(arr)
// let stor=0


// for(let u=0 ;u<arr.length ;u++){
//    stor +=arr[u]
   
// }
// return stor

// //   return arr.reduce((a, b) => a + b, 0);
// }
// console.log(sumArray([1,3,4,2,4]))
// function fibonacci(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }
// console.log(fibonacci(4))
// function print(){
//    for(let t=1; t<=10 ;t++){
//       console.log(t)
      
//    }
// }
// console.log(print())
// function check(word,sentence){
//     let fullSentence= sentence
//    return fullSentence.includes(word)
// }
// console.log(check("d",'dog')) 
 
// function multiplicatio(n){
//    for(let i=1 ;i<n ; i++){
//       if(i%3==0){
//          console.log("mulof'3'")
//       }
//       else if(i%5==0){
//          console.log("mulof'5'")

//       }
//       else{
//          console.log(i)
//       }
      
//    }
   


// }
// multiplicatio(11)

// function arrr(arr){
//    arr.sort((a,b)=>b-a)
//    console.log(arr)
//    console.log(arr[1])
     
// }
// arrr([1,3,6,9,7])

//  function checkemail(email){
//    console.log(email)
//    email.includes('@')
   
//    if(email.includes("@")&& email.includes(".")){
//       return true

//    } 
// else{
//    return false
// }
//   }
 
 
// console.log(checkemail("afnan@.com"))
// function reverse(s){
//     let ar=[]
//    for (let o=0 ;o<s.length ;o++){
      
//    ar.push(s[o])
  

   
     
//    }
//    ar.reverse()
//    ar.join()
//     console.log(ar)
   
   
// }
// console.log(reverse('hello'))
// alert("helo")

// datatype
// console.log(typeof namevarble);

// conversion
// of Number
// "33" = 33
// "33ada"= NaN
// true = 1 ;false = 0

// of Boolean
// 1 = true ;0 =false
// "" = false
// "kalpeh"=true

// of string

// operation
//  prefix and postfix
//  let a = 5;
// let b = ++a; // prefix
// console.log(a); // 6
// console.log(b); // 6  (because a was increased before assigning)

// let a = 5;
// let b = a++; // postfix
//    console.log(a); // 6 (increased after use)
// console.log(b); // 5 (old value was assigned before increment)

//  reference (non primitive)
// Array, Object , function

//  let ag = 5, bs = 10;
//  console.log(ag, bs)
// [ag, bs] = [bs, ag];
// console.log(ag, bs); // 10 5
// let x = 10;
// {
//   let x = 20; // shadows outer x
//   console.log(x); // 20
// }
// console.log(x); // 10

