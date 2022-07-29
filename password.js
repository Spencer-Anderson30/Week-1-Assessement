var password = "WordPass30";
var response;
var entryCount;
var entryLimit;
var error = false;
var maxLength = '20';


if (password >= 10) {
    console.log("Password is long enough")
} else if (password === 0) {
    console.log("Has a letter and a number") 
} else ("password is long enough")


if (password > 20) {
    console.log("Too long")
} else {
    console.log("Pasword is the right length")
}


while (response != password && !error) {
    if (entryCount < entryLimit) {
        response = window.prompt("Enter Password");
        entryCount++;
    } else {
        error = true;
    }
}
if (error) {
    alert("too many entries");
} else {
    alert ("Correct!");
}


