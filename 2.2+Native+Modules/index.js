const fs= require("fs");
// console.log("hello");
// fs.writeFile("message.txt", "Hey my name is Aniket Rawat", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
