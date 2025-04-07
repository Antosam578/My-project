const prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
    },2000)
})

prom.then (console.log).catch(console.log);

const prom1 =Promise.reject("immetiate success");
prom1.then(console.log).catch(console.log);

const asyncfunction = async()=>{
    const prom1 = await Promise.resolve("asyn and wait");
    console.log(prom1)
}
asyncfunction();