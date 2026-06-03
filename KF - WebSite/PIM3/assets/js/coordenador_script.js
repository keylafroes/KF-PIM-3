const subjectSelect = document.querySelector('.filter-box__select');

subjectSelect.addEventListener('change', () => {

    console.log(
        `Matéria selecionada: ${subjectSelect.value}`
    );

});

const studentInput = document.querySelector('.filter-box__input');

studentInput.addEventListener('input', () => {

    console.log(
        `Buscando estudante: ${studentInput.value}`
    );

});