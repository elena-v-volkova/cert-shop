// phoneFormatter.js
export function validateAndFormatPhone(inputValue) {

    let inputNumbersValue = inputValue.replace(/\D/g, "");

    let formattedInputValue = "";

    if (!inputNumbersValue) {
        return inputValue = formattedInputValue;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
            formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
    } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }


    return formattedInputValue;

}