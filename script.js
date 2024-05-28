let input = '';
let result = 0;

const calculation = (value) => {
    if(value === '=') {
        try {
            result = eval(input);
            document.querySelector('.screen').value = result;
            input = '';
        } catch {
            document.querySelector('.screen').value = 'Error';
            input = '';
        }
    } else if(value === 'C') {
        input = '';
        document.querySelector('.screen').value = input;
    } else {
        input += value;
        document.querySelector('.screen').value = input;
    }
}