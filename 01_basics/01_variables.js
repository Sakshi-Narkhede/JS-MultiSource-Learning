const accountId = 13305
let accountEmail = "sakshi@yahoo.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState // undefined --> if we simply declare a variable and don't assign any value to it, then JS        considers it as undefined

// accountId = 1010 // NOT ALLOWED
// console.log(accountId); // TypeError: Assignment to constant variable.

accountEmail = "sn@sn.com"
accountPassword = "100100"
accountCity = "Pune"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    const = can't be re-assigned a value and can't be declared again  (block scope)
    let = can be re-assigned a value but can't be declared again (block scope)
    var = it can be re-assigned a value and it can also be declared again  (Global scope)

    => Never use var in your code because of block and functional scope issues.
    # console.table([group of variables you want to show in tabular form])
*/