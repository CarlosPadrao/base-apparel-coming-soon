const inputBtn = document.querySelector('input');
const emailVer = document.querySelector('.email-verification')


inputBtn.addEventListener('change', () => {
    let inputBtnValue = document.querySelector('input').value;
    var regex = /\S+@\S+\.\S+/;
    var condicao = regex.test(inputBtnValue);

    if (condicao == true) {
        emailVer.classList.add('__ok');
        emailVer.classList.remove('hide');
        emailVer.textContent = "Valid email";
    } else {
        emailVer.classList.remove('hide');
        emailVer.classList.remove('__ok');
        emailVer.textContent = "Please provide a válid email"
    }
});