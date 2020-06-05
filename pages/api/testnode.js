const { exec } = require("child_process");

exec("ls -la", (e, s, m) => {
  console.log("testrunning");
});

const a = 1;
const b = 2;

console.log(a + b);
