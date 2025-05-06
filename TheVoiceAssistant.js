alert("What is my balance?");

const customResponse = "Your balance is $1534.23, you spent $301.23 in the restaurant category.";
const defaulttResponse = ("Your balance is $1534.23.")

const silenceResponse = false; 

const finalResponse = customResponse || defaulttResponse || silenceResponse;

if (finalResponse !== false) {
    alert(finalResponse);
}

