const userRole = document.getElementById('userRole');

const subjectField = document.getElementById('subjectField');

userRole.addEventListener('change', () => {

    if (userRole.value === 'tutor') {

        subjectField.style.display = 'flex';

    } else {

        subjectField.style.display = 'none';

    }

});

/* ESCONDE O CAMPO AO CARREGAR */

subjectField.style.display = 'none';