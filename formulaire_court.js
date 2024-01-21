let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoi du formulaire détecté !');

    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let passwordRepeat = document.querySelector('#password2');
    let pseudo = document.querySelector('#pseudo');

    let errorContainer = document.querySelector('.message-error');
    let errorList = document.querySelector('.message-error ul');
    errorList.innerHTML = "";
    errorContainer.classList.remove('visible');

    if (email.value === '') {
        errorContainer.classList.add('visible');
        email.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le champ email ne peut pas être vide";
        errorList.appendChild(err);
    } else {
        email.classList.add('success');
    }
    if (pseudo.value.length < 6) {
        errorContainer.classList.add('visible');
        pseudo.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";
        errorList.appendChild(err);
    } else {
        pseudo.classList.add('success');
    }

    let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{10,}$/;

    if (password.value.length < 10 || !passCheck.test(password.value)) {
        errorContainer.classList.add('visible');
        password.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";
        errorList.appendChild(err);
    } else {
        password.classList.add('success');
    }

    if (password.value !== passwordRepeat.value) {
        errorContainer.classList.add('visible');
        passwordRepeat.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Les mots de passe sont différents";
        errorList.appendChild(err);
    } else {
        passwordRepeat.classList.add('success');
    }

    let successContainer = document.querySelector('.message-success');
    successContainer.classList.remove('visible');

    if (
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordRepeat.classList.contains('success')
    ) {
        successContainer.classList.add('visible');
    }
});
