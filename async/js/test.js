
// //By usig then
// function executeWithThen() {
//     console.log("1) Start THEN version");

//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then(res => {
//             console.log("2) Fetch FINISHED (THEN)");
//             return res.json();
//         })
//         .then(data => {
//             console.log("3) JSON CONVERTED (THEN)");
//             console.log("DATA:", data);
//         })
//         .catch(error=>{
//             console.log("Error (Then):",error);
//         });

//     console.log("4) END of THEN function (NO WAITING)");
// }
// executeWithThen();

// // Version 2 — Same code but using async/await
// async function executeWithAsync() {
//     console.log("1) Start ASYNC version");
//     try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log("2) Fetch FINISHED (AWAIT)");

//     const data = await res.json();
//     console.log("3) JSON CONVERTED (AWAIT)");

//     console.log("DATA:", data);
//     }
//     catch(error){
//         console.log("ERROR (ASYNC/AWAIT):", error)
//     }
//     // console.log("4) END of ASYNC function (AFTER WAITING)");
// }

// executeWithAsync();





