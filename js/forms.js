document.addEventListener('DOMContentLoaded', function () {
    const celularInput = document.getElementById('celular');
    const dddRegex = /^(\d{2})(\d)/;
    const celularMaskRegex = /(\d{5})(\d)/;
    const fixoMaskRegex = /(\d{4})(\d)/;

    celularInput.addEventListener('input', function (e) {
        let value = e.target.value;

        if (value.length === 1 && !value.startsWith('+')) {
            value = '+55 ' + value;

        } else if (value.length === 0 && e.inputType === 'deleteContentBackward') {
            e.target.value = '';
            return;

        } else if (value.length === 4 && value === '+55 ') {
            e.target.value = '';
            return;
        }



        let digitsOnly = value.startsWith('+55 ') ? value.substring(4).replace(/\D/g, '') : value.replace(/\D/g, '');

        let formattedDigits = '';
        if (digitsOnly.length > 0) {
            formattedDigits = digitsOnly.replace(dddRegex, '($1) $2');
        }       
        if (formattedDigits.length > 9) {
            formattedDigits = formattedDigits.replace(celularMaskRegex, '$1-$2');
        } else if (formattedDigits.length > 8) {
            formattedDigits = formattedDigits.replace(fixoMaskRegex, '$1-$2');
        }

        e.target.value = '+55 ' + formattedDigits;
    });

    celularInput.addEventListener('blur', function (e) {
        let cleanValue = e.target.value.replace('+55', '').replace(/\D/g, '');

        if (cleanValue.length !== 11) {
            celularInput.setCustomValidity('Por favor, insira um número de celular válido com DDD (ex: +55 (11) 99999-9999).');
        } else {
            celularInput.setCustomValidity('');
        }
    });
});
