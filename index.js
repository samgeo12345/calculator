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
document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    
    // Load the initial mode from localStorage if available
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    modeToggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (body.classList.contains('blue-theme')) {
            body.classList.remove('blue-theme');
            body.classList.add('red-theme');
            localStorage.setItem('mode', 'red-theme');
        } else if (body.classList.contains('red-theme')) {
            body.classList.remove('red-theme');
            body.classList.add('violet-theme');
            localStorage.setItem('mode', 'violet-theme');
        }else if (body.classList.contains('violet-theme')) {
            body.classList.remove('violet-theme');
            body.classList.add('green-theme');
            localStorage.setItem('mode', 'green-theme');
        }else if (body.classList.contains('green-theme')) {
            body.classList.remove('green-theme');
            body.classList.add('yellow-theme');
            localStorage.setItem('mode', 'yellow-theme');
        }else if (body.classList.contains('yellow-theme')) {
            body.classList.remove('yellow-theme');
            body.classList.add('orange-theme');
            localStorage.setItem('mode', 'orange-theme');
        }else if (body.classList.contains('orange-theme')) {
            body.classList.remove('orange-theme');
            body.classList.add('pink-theme');
            localStorage.setItem('mode', 'pink-theme');
        }else if (body.classList.contains('pink-theme')) {
            body.classList.remove('pink-theme');
            body.classList.add('skyblue-theme');
            localStorage.setItem('mode', 'skyblue-theme');
        } else if (body.classList.contains('skyblue-theme')) {
            body.classList.remove('skyblue-theme');
            localStorage.removeItem('mode');
        } else {
            body.classList.add('blue-theme');
            localStorage.setItem('mode', 'blue-theme');
        }
    });
});