const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        filterButtons.forEach((item) => {
            item.classList.remove('filter-button--active');
        });

        button.classList.add('filter-button--active');

    });

});

const replyButtons = document.querySelectorAll('.reply-button');

replyButtons.forEach((button) => {

    button.addEventListener('click', () => {

        if (
            button.classList.contains('reply-button--disabled')
        ) {
            return;
        }

        const questionCard = button.closest('.question-card');

        const replyBox = questionCard.querySelector('.reply-box');

        replyBox.scrollIntoView({
            behavior: 'smooth'
        });

    });

});