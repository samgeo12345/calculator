document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('input');
    let buttons = document.querySelectorAll('button');
    let inputString = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let buttonText = button.id;

            if (buttonText === '=') {
                inputString = inputString.replace('x', '*');
                try {
                    input.innerText = eval(inputString);
                    inputString = input.innerText;
                } catch {
                    input.innerText = 'ERROR';
                    inputString = '';
                }
            } else if (buttonText === 'AC') {
                inputString = '';
                input.innerText = inputString;
            } else if(buttonText === 'clear'){
                inputString = inputString.slice(0,-1);
                input.innerText = inputString;
            }else {
                inputString += buttonText;
                input.innerText = inputString;
            }
        });
    });
});
