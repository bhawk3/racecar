

//Get the user input from the page
function getValues() {
    //Get the alert box
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("alert1").classList.add("invisible");

    //Get the input from the page
    let userString = document.getElementById("userString").value;
    let race = checkString(userString);

    //Display the displayString function
    displayString(race, userString);
}

//Check if the input is a palindrome 
function checkString(userString) {
    //Set blank array so we can loop through the user input string
    let race = [];
    
    //Loop through the array and reverse string
    for (let index = userString.length - 1; index >= 0; index--) {
        
        race += userString[index];
    }
    return race;
}

//Display whether it is a palindrome or not
function displayString(race, userString) {
    let palindrome = false;

    //if the user input is == race array set palindrome == true
    if (userString == race) {
            palindrome = true;
        } else {
            palindrome = false;
        }
    
    if (palindrome == true ) {
    //turn on the successful alert box
    document.getElementById("alert").classList.remove("invisible");
    } else {
    //turn on the failure alert box
    document.getElementById("alert1").classList.remove("invisible");
    }

    //write the msg to the page
    document.getElementById("msg").innerHTML = `Your string is ${race}`;
}
