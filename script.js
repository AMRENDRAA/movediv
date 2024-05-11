// console.log("pandit");
// console.log(2+3);


// for( i=0;i<10;i++)
// {
//     console.log("yes");

// }
// function myname(a,v){
// console.log(a+v);
// }
// myname(2,4);
// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,9);


// let a=()=>{
//     console.log("snssn");


// }

// console.log(a);



// let num=[1,2,3,4,5,6,7,8,9,10];
// for( i=0;i<num.length;i++)
// {
//     console.log(num[i]);
// }
// let arr=[

//     [1,2],
//     [2,2],
//     [3,3]
// ];
// console.log(arr[1][1]);
// for(i in arr)
// {
//     console.log(i);
// }




// let Obj={
// "name ": "23",
// "CLASS": "10",
// fun :function(){
//     console.log("hello I am function pandit");

// }
// }
// Obj.fun();


// let arr=[
    
//         {user:1, name :"PANDIT"},
//         {user:2, name :"AMRENDRA"},
//         {user :3, name:"Raj"}
    
// ];
// console.log(arr)
// function sum(){
//     console.log("this is a function");
//     const a=2;

//     function sum2(){
//         const a=3;
//         console.log("value of a ="+a);
//         console.log("this is a function within a function");

//     }
//     sum2();
// }

// sum();
//  function sum(){
//     debugger;
//     for(let i=1;i<5;i++)
//     console.log("i:"+i);

//  }
//  sum();



// let a=[10,20,20,20,892,289,29,29]
// let s=new Set([10,20,20,30,40,50]);
// console.log(s);

// var obj={
//    fname :"John",
//    age:8,
//    fun :function(){
//       console.log(this.fname);
//    }
// }
// obj.fun();

// function sum(n){
//    if(n<10)
//    {
//       console.log(n);
//       sum(n+1)
//    }
// }

// sum(1);
// console.log("hello team ");

// setTimeout(()=>
// {
//    console.log("yes");
// },1000

// )
// console.log("abc");
// function fun(val){
//     console.log(val);

// }
// function add (a,b,callback){
//     let sum=a+b;
//     callback(sum);
// }

// add(7,8,fun);

// ------------------------------------------------------------------------------------------------------------------------------------
// Callback hell

// function loadingdata(callback ){
//     setTimeout(() => {
//         console.log("1. Loading Data will load after after 1 seconds ");
    
//         callback();


//     }, 1000);
// }
// function collectingdata(callback ){

//     setTimeout(() => {
//         console.log("2. collecting  Data will load after after 1 seconds ");
        
//         callback();


//     }, 1000);
    
// }
// function approvingdata(){


//     setTimeout((callback) => {
//         console.log("3) Approving data is loaded after 1 second ");
//          callback();


//     }, 1000);
    

// }

// function approved (){
//     console.log("4 ) Approved ");
// }

// loadingdata(function(){

//     collectingdata(function(){
//         approvingdata(function(){
//             approved();

//         });
        
    


//     });
    

// });
// ---------------------------------------------------------------------------------------------

// function loadingdata( ){
//     return new Promise((resolve,reject)=>{




//         setTimeout(() => {
//             console.log("1. Loading Data will load after after 1 seconds ");
        
//             resolve();
    
    
//         }, 1000);
    
    
//     })
    
// }
// function collectingdata(callback ){

//     return new Promise((resolve,reject)=>{




//         setTimeout(() => {
//             console.log("2. collecting  Data will load after after 1 seconds ");
        
//             reject('error');
    
    
//         }, 1000);
    
    
//     })
    
// }
// function approvingdata(){

//     return new Promise((resolve,reject)=>{




//         setTimeout(() => {
//             console.log("1. Loading Data will load after after 1 seconds ");
        
//             resolve();
    
    
//         }, 1000);
    
    
//     })
    

// }

// loadingdata().then(collectingdata).then(approvingdata).catch((err)=>{
// console.log(err);
// }
// )


//====================================================================================================================


//set interval


// setInterval (fun,2000);

// let num=0;
// setInterval(fun,2000)
// function fun (){
//   num=num+1;
//   console.log(num);
// }

// function fun (){
//     console.log(this.name);

// }
// var obj={
//     name:"amrendra",
   
// }
// var obj2 ={
//     name:"pandit"
// }

// fun.call(obj2)
// function person(name ,age){
//     this.name=name;
//     this.age=age;

// }
// person.prototype.greet =function (){
//     console.log('hello $ {this.name}  ')
// }
// let user =new person("abc",9)
// user.greet();
// console.log(user);

//class

 

 //animal
//  class animal {

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){

//         console.log(`dog class is extended   with animal ${this.name}`);
//     }
//  }
//  let u= new animal("me ",8);
//  user.greet();
//  console.log(u);
//  class dog extends animal{

//     constructor(name,age){
//        super(name);
//     }
//  }
//  let user = new dog("class ",8);
//  user.greet();
//  console.log(user);


// function fun(a,b){

// try{
//     if(b==0)
//     {
//         throw new Error("cant divide by 0")
//     }
//     else{
//         console.log(a/b);
//     }
// }catch(err){
//         console.log(err.message);
//     }


// }

// console.log(fun(1,1));

//fetch api 


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{
//     if(!response.ok){
//         throw new Error('network issue ')
//     }


//     return response.json();
// })
// .then( data => data.forEach(element => {
//     console.log(element.id);
    
// }));


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// var a=  document.querySelector('.pandit')
// console.log(a.previousElementSibling)
// const aul = document.querySelector('ul');


// aul.remove();
// var a=document.querySelectorAll('.pandit');
// a.innerHTML= '<b> Panbit</b>';
// console.log(a);
// console.log("sdhjgd");

var a= document.querySelector('.pandit');





console.log(pandit.getAttribute('me'));
