document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const celular = document.getElementById('num');
    const carro = document.getElementById('carro');
    const data = document.getElementById('data');
    const mensagem = document.getElementById('msg');
    const modal = document.getElementById('sucessoEnvio');
    const closeBtn = document.querySelector('.close-button');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (checkInputs()) {
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.value.trim() !== '', 'Nome inválido');
    });

    celular.addEventListener('input', () => {
        validateField(celular, celular.value.trim() !== '', 'Digite um número válido!');
    });

    carro.addEventListener('input', () => {
        validateField(carro, carro.value.trim() !== '', 'Digite um carro válido!');
    });

    data.addEventListener('input', () => {
        validateField(data, data.value.trim() !== '', 'Digite uma data válida!');
    });

    mensagem.addEventListener('input', () => {
        validateField(mensagem, mensagem.value.trim() !== '', 'Mensagem inválida');
    });

    function checkInputs() {
        let isValid = true;

        validateField(name, name.value.trim() !== '', 'Nome inválido');
        validateField(celular, celular.value.trim() !== '', 'Digite um número válido!');
        validateField(carro, carro.value.trim() !== '', 'Digite um carro válido!');
        validateField(data, data.value.trim() !== '', 'Digite uma data válida!');
        validateField(mensagem, mensagem.value.trim() !== '', 'Mensagem inválida');

        document.querySelectorAll('.form-dados').forEach((control) => {
            if (control.classList.contains('erro')) {
                isValid = false;
            }
        });

        console.log("Formulário válido:", isValid);
        return isValid;
    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement; 
        formControl.classList.add('erro');
        formControl.classList.remove('sucesso');
    
        let icon = formControl.querySelector('.icon');
        if (!icon) {
            icon = document.createElement('i'); // Se o ícone não existir, cria um novo
            icon.classList.add('icon');
            formControl.appendChild(icon);
        }
    }
    
    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.classList.add('sucesso');
        formControl.classList.remove('erro');
    
        let icon = formControl.querySelector('.icon');
        if (!icon) {
            icon = document.createElement('i'); // Se o ícone não existir, cria um novo
            icon.classList.add('icon');
            formControl.appendChild(icon);
        }
    
        icon.className = 'icon fas fa-check-circle'; // Ícone de sucesso
    
        console.log(`Sucesso no campo: ${input.id}`);
    }


    function showModal() {
        modal.style.display = 'block';

        if (closeBtn) {
            closeBtn.onclick = function () {
                modal.style.display = 'none';
            };
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

    }

    });

