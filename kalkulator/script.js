// --- ZEGAR ---
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Formatowanie godziny (HH:MM:SS)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Uruchomienie zegara i aktualizacja co sekundę
updateClock(); // Pierwsze wywołanie od razu
setInterval(updateClock, 1000);


// --- KALKULATOR ---

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Funkcja aktualizująca wyświetlacz
function updateDisplay() {
    display.textContent = currentInput;
}

// Obsługa wprowadzania cyfr i kropki
function inputDigit(digit) {
    if (waitingForSecondOperand === true) {
        currentInput = digit;
        waitingForSecondOperand = false;
    } else {
        // Zapobieganie wielokrotnym zerom na początku (np. 0005)
        // Jeśli aktualnie jest '0', zamień na nową cyfrę, w przeciwnym razie dołącz
        currentInput = currentInput === '0' ? digit : currentInput + digit;
    }
    updateDisplay();
}

// Obsługa kropki dziesiętnej
function inputDecimal() {
    if (waitingForSecondOperand === true) {
        currentInput = '0.';
        waitingForSecondOperand = false;
        updateDisplay();
        return;
    }

    // Dodanie kropki tylko jeśli jej jeszcze nie ma
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Obsługa operatorów
function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (operator && waitingForSecondOperand) {
        // Zmień operator na nowy, jeśli nie wprowadzono drugiej liczby
        operator = nextOperator;
        return;
    }

    // Jeśli to pierwsze naciśnięcie operatora, zapisz liczbę
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        // Jeśli mamy operator i drugą liczbę, wykonaj obliczenie
        const result = performCalculation[operator](firstOperand, inputValue);

        currentInput = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

// Obiekty z funkcjami obliczeń
const performCalculation = {
    '/': (first, second) => first / second,
    '*': (first, second) => first * second,
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '=': (first, second) => second // Dla równości, nie rób nic i po prostu wyświetl drugą liczbę, jeśli jest już operator
};

// Funkcja czyszcząca
function resetCalculator() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}


// Główny słuchacz zdarzeń (event listener)
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target.classList.contains('btn-number')) {
            inputDigit(target.textContent);
            return;
        }

        if (target.classList.contains('btn-operator') || target.classList.contains('btn-equal')) {
            handleOperator(target.textContent);
            return;
        }

        if (target.classList.contains('btn-clear')) {
            resetCalculator();
            return;
        }

        // Obsługa kropki (przycisk z . jest też 'btn-number', ale musimy go oddzielnie obsłużyć, bo ma specjalną logikę)
        if (target.textContent === '.') {
            inputDecimal();
            return;
        }
    });
});
// --- OBSŁUGA KLAWIATURY 123 ---

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Klawisze cyfr i kropka
    if (/[0-9]/.test(key)) {
        inputDigit(key);
    } else if (key === '.') {
        inputDecimal();
    }
    
    // Klawisze operatorów
    if (['+', '-', '*', '/'].includes(key)) {
        // Zastępujemy '/' w klawiaturze numerycznej przez '/'
        const operatorKey = key === '/' ? '/' : key;
        handleOperator(operatorKey);
    }
    
    // Klawisze "Równa się" i "Enter"
    if (key === '=' || key === 'Enter') {
        event.preventDefault(); // Zapobiega domyślnym działaniom (np. wysłaniu formularza)
        handleOperator('=');
    }
    
    // Klawisz "Wyczyść" (Delete/Backspace/Escape)
    if (key === 'Escape' || key === 'Delete' || key === 'Backspace') {
        event.preventDefault(); // Zapobieganie cofaniu się w przeglądarce
        resetCalculator();
    }
});

// Inicjalizacja wyświetlacza
updateDisplay();