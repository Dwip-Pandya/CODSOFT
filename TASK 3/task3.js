let memory = 0;

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (value === '√') {
        display.value = Math.sqrt(eval(display.value));
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function memoryClear() {
    memory = 0;
    updateMemoryDisplay();
}

function memoryRecall() {
    document.getElementById('display').value += memory;
}

function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value);
    updateMemoryDisplay();
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value);
    updateMemoryDisplay();
}

function updateMemoryDisplay() {
    document.getElementById('memoryDisplay').textContent = `Memory: ${memory}`;
}
