document.addEventListener('DOMContentLoaded', function() {
            const celularInput = document.getElementById('celular');
            const dddRegex = /^(\d{2})(\d)/;
            const celularMaskRegex = /(\d{5})(\d)/; // Para números 9XXXX-XXXX
            const fixoMaskRegex = /(\d{4})(\d)/; // Para números 9XXX-XXXX (cai aqui se for fixo ou celular sem o 9º dígito)

            celularInput.addEventListener('input', function(e) {
                let value = e.target.value;

                // 1. Adicionar o "+55 " se o campo estiver vazio e o usuário começar a digitar
                // ou se ele começar a digitar e o +55 não estiver lá
                if (value.length === 1 && !value.startsWith('+')) {
                    value = '+55 ' + value;
                } else if (value.length === 0 && e.inputType === 'deleteContentBackward') {
                    // Se o usuário apagar tudo, remove o +55
                    e.target.value = '';
                    return; // Sai da função para evitar processamento adicional
                } else if (value.length === 4 && value === '+55 ') {
                     // Se o usuário apagar o primeiro número e ficar só "+55 ", limpa tudo
                    e.target.value = '';
                    return;
                }


                // 2. Remove tudo que não for dígito, exceto o '+' inicial se houver
                // Pega o que vem depois do "+55 "
                let digitsOnly = value.startsWith('+55 ') ? value.substring(4).replace(/\D/g, '') : value.replace(/\D/g, '');


                // 3. Aplica a máscara nos dígitos restantes
                let formattedDigits = '';
                if (digitsOnly.length > 0) {
                    formattedDigits = digitsOnly.replace(dddRegex, '($1) $2'); // DDD
                }
                if (formattedDigits.length > 9) { // Para celular 9xxxx-xxxx (incluindo o DDD e parênteses)
                    formattedDigits = formattedDigits.replace(celularMaskRegex, '$1-$2');
                } else if (formattedDigits.length > 8) { // Para fixo 9xxx-xxxx ou celular 9xxxx-xxxx antes do 9
                    formattedDigits = formattedDigits.replace(fixoMaskRegex, '$1-$2');
                }

                // Junta o prefixo "+55 " com os dígitos formatados
                e.target.value = '+55 ' + formattedDigits;
            });

            // Validação final ao sair do campo (blur)
            celularInput.addEventListener('blur', function(e) {
                // Remove o "+55 " e todos os não-dígitos para validar apenas o número
                let cleanValue = e.target.value.replace('+55', '').replace(/\D/g, '');

                // Validação para celulares no Brasil (DD + 9 dígitos)
                // Celulares no Brasil devem ter 11 dígitos (2 DDD + 9 número)
                if (cleanValue.length !== 11) {
                    celularInput.setCustomValidity('Por favor, insira um número de celular válido com DDD (ex: +55 (11) 99999-9999).');
                } else {
                    celularInput.setCustomValidity(''); // Limpa a mensagem de erro
                }
            });
        });