// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log("done"));
//   }, 1000);
// });

// myPromise.then(
//   (result) => alert(result),
//   (error) => alert(error)
// );

// const loadData = async () => {
//   try {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;

//   } catch (err) {
//     console.log(err);
//   }
// }

// const data = loadData().then(data => console.log(data));
// console.log(data);

// iife
// (async () => {
//   const data = await loadData();
//   console.log(data);
  
// })();


const loadData = async () => {
  try {
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    const results = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3)
    ])
    const dataPromises = await results.map(result => result.json());
    const finalData = Promise.all(dataPromises);
    return finalData;

  } catch (err) {
    console.log(err);
  }
}

const data = loadData().then(data => console.log(data));
