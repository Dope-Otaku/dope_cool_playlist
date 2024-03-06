const gen = document.getElementById('generate');
const textPassword = document.getElementById('password');
const lower = document.getElementById('lowerCase');
const upper = document.getElementById('upperCase');
const digit = document.getElementById('digits');
const special = document.getElementById('specialChars');

gen.onclick = function () {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '1234567890';
    const specialChars = '!@#$%^&*()_-+={}[];:\'"<>.,/?';

    const randomNumber = (x) => {
        let tu = [];
        for (let i = 0; i < 8; i++) { 
            //  want an 8-character password
            let rand = Math.floor(Math.random() * x.length);
            tu.push(x[rand]);
        }
        return tu.join("");
    };

    if (!lower.checked && !upper.checked && !digit.checked && !special.checked) {
        textPassword.textContent = "Select at least one option";
    } else {
        let password = '';
        if (lower.checked) password += randomNumber(lowerCase);
        if (upper.checked) password += randomNumber(upperCase);
        if (digit.checked) password += randomNumber(digits);
        if (special.checked) password += randomNumber(specialChars);
        textPassword.textContent = password;
    }
};
