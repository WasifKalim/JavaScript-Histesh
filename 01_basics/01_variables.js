const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
var accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); // 144553

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// prints as a table with index
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])