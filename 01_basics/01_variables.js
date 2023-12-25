const accountId = 109
let accountEmail = "sahaj109@gmail.com"
var accountPassword = "0109"
accountCity = "Surat"

let accountState;

// accountId = 2 not allowed

accountEmail = "sahaj36@gmail.com"
accountPassword = "00036"
accountCity = "Aanand"


/*
prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
