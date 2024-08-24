document.getElementById('toggleMode').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        document.getElementById('toggleMode').innerHTML = "Dark Mode"
    } else {
        document.getElementById('toggleMode').innerHTML = "Light Mode"

    }
});
const result = document.getElementById('text');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

clear.addEventListener('click', () => {
    result.innerHTML = '0';
})

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        if (result.innerHTML === '0') {
            result.innerHTML = value;
        } else {
            result.innerHTML += value;
        }
    })
})


const add = (num1, num2) => result.innerHTML = num1 + num2;
const substract = (num1, num2) => result.innerHTML = num1 - num2;
const division = (num1, num2) => result.innerHTML = num1 / num2;
const multiplication = (num1, num2) => result.innerHTML = num1 * num2;
equals.addEventListener('click', () => {
    const operations = ['+', '-', 'X', '/'];
    operations.forEach(operation => {
        if (result.innerHTML.includes(operation)) {
            const num1 = Number(result.innerHTML.split(operation)[0]);
            const num2 = Number(result.innerHTML.split(operation)[1]);
            console.log('num1:'+num1+' num2:'+num2);
            if (operation == 'X') multiplication(num1, num2);
            if (operation == '+') add(num1, num2);
            if (operation == '-') substract(num1, num2);
            if (operation == '/') division(num1, num2);
        }
    })
})








