 


 //



 function fun (task){
    return new Promise((resolve,reject)=>{
if(task)
{
    resolve("completed");
}
else
{
    reject("rejected ");
}


    })
}
let onresolve =(res)=>{
    console.log(res);

}
let onreject=(reject)=>{
    console.log(reject );
}

fun(true).then(onresolve).catch(onreject);