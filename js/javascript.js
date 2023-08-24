const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let inputBtnValue = document.querySelector('input').value
    var regex = /\S+@\S+\.\S+/;
    var condicao = regex.test(inputBtnValue);

    if (condicao == true) {
        window.alert('OK: Email válido')
    } else {
        window.alert('ERROR: Email inválido')
    }
});