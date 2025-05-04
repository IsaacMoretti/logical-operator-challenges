 let userName = prompt("What's your name?");
 let userNickname = prompt("What's your nickname?");
 
let anotherName = userName || userNickname || "Guest" + Math.floor(Math.random() * 100)
alert(`Hello, ${anotherName}!`);