// // // const os = require('os')

// // // //info about current user
// // // const user = os.userInfo()
// // // console.log(user)

// // // //method returns the system uptime in seconds
// // // console.log(`The system Uptime is ${os.uptime()} second`)

// // // const currentOS = {
// // //   name: os.type(),
// // //   release: os.release(),
// // //   totalMem: os.totalmem(),
// // //   freeMem: os.freemem(),
// // // }
// // // console.log (currentOS)

// // const path = require('path')
// // console.log(path.sep)

// // const filepath = path.join('/content','subfolder','text.txt')
// // console.log(filepath)

// // const base = path.basename(filepath)
// // console.log(base)

// // const absolute = path.resolve(__dirname, 'content', 'subfolder','text.txt');
// // console.log(absolute)

// const { readFile, writeFile } = require("fs");

// readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/subfolder/result-sync.txt",
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("done with this task");
//       },
//     );
//   });
// });

// const http = require('http');

// const server = http.createServer((req, res)=> {
// if (req.url === '/'){
// res.end('Welcome to our home  page')
// }
// if (req.url === '/about'){
//   res.end("Here is short history")
// }
// res.end(`
//   <h1>Oops ! </h1>
//   <p>We cant seem to find the page yet </p>
//   <a href ="/">back Home</a>
//   `)



// })
// server.listen(5000)


const _ = require('lodash')

const items = [1,[2, [3. [4]]] ]

const newItems = _.flattenDeep(items)
console.log(newItems)