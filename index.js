const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(console.log("done"));
    },1000);
});

myPromise.then(
    result => alert(result),

    error => alert(error)
)