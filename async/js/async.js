function waitTwoSec(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Done waiting 2 seconds!!")
        },2000)
    });
}
async function demo() {
    console.log("Start");

    const result=await waitTwoSec();

    console.log(result);
    console.log("Done!!!!");
}
demo();