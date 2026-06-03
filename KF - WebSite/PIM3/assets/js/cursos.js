const filterButtons = document.querySelectorAll('.filter__button');

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        filterButtons.forEach((item) => {
            item.classList.remove('filter__button--active');
        });

        button.classList.add('filter__button--active');

    });

});