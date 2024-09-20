/**
 * common shared functons here
 */
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    //show the section with provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}