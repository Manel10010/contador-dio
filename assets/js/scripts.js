let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
    if (10 > currentNumber) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'darkgreen';
    } 

    if (currentNumber === 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    if (-10 < currentNumber) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'darkred';
    }

    if (currentNumber === 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

// PARTE USANDO EVENTLISTENER
document.getElementById('subtrair').addEventListener('click', decrement);
document.getElementById('adicionar').addEventListener('click', increment);