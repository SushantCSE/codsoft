// Function to add characters to the display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate based on the display value
function calculate() {
    let display = document.getElementById('display').value;
    let result = eval(display); // Using eval for simplicity; consider using safer methods in production
    document.getElementById('display').value = result;
}