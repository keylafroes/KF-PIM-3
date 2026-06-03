const actionButtons = document.querySelectorAll('.action-button');

actionButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const row = button.closest('tr');

        const statusBadge = row.querySelector('.status-badge');

        const isActive =
            statusBadge.classList.contains(
                'status-badge--active'
            );

        if (isActive) {

            statusBadge.textContent = 'Desativado';

            statusBadge.classList.remove(
                'status-badge--active'
            );

            statusBadge.classList.add(
                'status-badge--inactive'
            );

            button.innerHTML = `
                <span class="material-symbols-outlined">
                    check_circle
                </span>

                Ativar
            `;

            button.classList.remove(
                'action-button--disable'
            );

            button.classList.add(
                'action-button--enable'
            );

        } else {

            statusBadge.textContent = 'Ativo';

            statusBadge.classList.remove(
                'status-badge--inactive'
            );

            statusBadge.classList.add(
                'status-badge--active'
            );

            button.innerHTML = `
                <span class="material-symbols-outlined">
                    block
                </span>

                Desativar
            `;

            button.classList.remove(
                'action-button--enable'
            );

            button.classList.add(
                'action-button--disable'
            );

        }

    });

});

/* FILTROS */

const filterButtons = document.querySelectorAll(
    '.filter-button'
);

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        filterButtons.forEach((item) => {

            item.classList.remove(
                'filter-button--active'
            );

        });

        button.classList.add(
            'filter-button--active'
        );

    });

});