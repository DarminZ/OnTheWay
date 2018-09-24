
let p = Promise.resolve().then(()=>{
    let result = 1;
    console.log(1);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(2);
            resolve(result = 2);
        },1000);
        setTimeout(()=>{
            console.log(2.1);
            reject(result = 2.1);
        },999);
    })
});
p.then((res)=>{
    console.log(res);
    console.log(3);
}).catch((err)=>{
    console.log(err);
    console.log(4);
});
p.then((res)=>{
   console.log(`d:${res}`);
}).catch((err)=>{
    console.log(`e:${err}`)
});
