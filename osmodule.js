const os = require("os");

//suppose i want to the info of the current user
const user = os.userInfo();
console.log(user);

// suppose we wan to take of the uptime of the system

console.log(`The Uptime of my system is ${os.uptime()}`);
console.log("The Release model of my Latop is : " + os.release())

const osinfo = {
  name: os.type(),
  release: os.release(),
  memory: os.totalmem(),
  freemem: os.freemem(),
  other: os.hostname(),
  oth: os.machine(),
  m: os.platform(),
};




