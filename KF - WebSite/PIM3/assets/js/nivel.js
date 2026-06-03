const levelButtons = document.querySelectorAll('.level-card__button');

levelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Nível selecionado com sucesso!');
  });
});