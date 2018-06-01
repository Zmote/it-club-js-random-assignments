let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "Dezember"];

function convertToMonthName(monthNumber) {
    if(typeof monthNumber === "number"
    && monthNumber > 0 && monthNumber < 13){
        return months[monthNumber-1];
    }
    return "Wrong Input. Enter a number between 1 and 12.";
}

for(let i = 1; i <= 12; i++){
    console.log(convertToMonthName(i));
}