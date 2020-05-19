// var fs = require('fs');
// var readFileSync = requre('readline-sync')
// var data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// var members = {
//     name: 'Trong',
//     age: 23,
//     sex: 'male'
// }
// data.push(members);
// console.log(data);


var fs = require("fs");
// Tạo file bằng writeFile
var data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

var members = {
    name: 'Trong',
    age: 25,
    class: 11
}
data.push(members);
fs.writeFileSync('data.json', JSON.stringify(data));

console.log(data);