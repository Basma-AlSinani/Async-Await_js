**What is Async/Await?**
async and await are modern JavaScript keywords that make working with asynchronous code easier.
They allow you to write asynchronous operations as if they were synchronous, making code cleaner and easier to read.

**Why do we use Async/Await?**
1.Cleaner code than Promises .then() .
2.Looks synchronous.
3.Easier error handling with try/catch.
4.Better for long asynchronous workflows.

**How to create an async function?**
You simply put async before a function.
async function getData() {
    return "Hello";
}

**What is await?**
await tells JavaScript:
“Pause this function until the Promise is finished, then continue.”

**Example: Fetching data with Async/Await:**
async function getTodo() {
    try {
        // Wait for the request 
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        // Wait for JSON parsing 
        let data = await response.json();

        console.log("Data received:", data); // print result 
    } 
    catch (error) {
        console.log("Error:", error); 
    }
}

getTodo();


**Comparison: Promise vs Async/Await**

Promise (Messy)
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
Async/Await (Clean )
async function load() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

**Notes**
await pauses only inside the async function, not the whole program.
An async function always returns a Promise.
You can combine async/await with try/catch for errors.


**Async/Await = a cleaner, simpler way to write asynchronous code in JavaScript.**
