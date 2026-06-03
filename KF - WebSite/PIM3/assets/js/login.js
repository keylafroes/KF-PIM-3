const loginTab = document.getElementById(
    'login-tab'
);

const signupTab = document.getElementById(
    'signup-tab'
);

const loginForm = document.getElementById(
    'login-form'
);

const signupForm = document.getElementById(
    'signup-form'
);

const authButton = document.getElementById(
    'auth-button'
);

const buttonText = document.getElementById(
    'button-text'
);

/* CONTROLE DAS ABAS */

let isLogin = false;

/* LOGIN */

loginTab.addEventListener('click', () => {

    isLogin = true;

    loginForm.classList.remove('hidden');

    signupForm.classList.add('hidden');

    loginTab.classList.add(
        'auth-tabs__button--active'
    );

    signupTab.classList.remove(
        'auth-tabs__button--active'
    );

    buttonText.textContent = 'Entrar';

});

/* SIGNUP */

signupTab.addEventListener('click', () => {

    isLogin = false;

    signupForm.classList.remove('hidden');

    loginForm.classList.add('hidden');

    signupTab.classList.add(
        'auth-tabs__button--active'
    );

    loginTab.classList.remove(
        'auth-tabs__button--active'
    );

    buttonText.textContent =
        'Criar Minha Conta';

});

/* BOTÃO PRINCIPAL */

authButton.addEventListener(
    'click',
    async () => {

        /* LOGIN */

        if (isLogin) {

            const cpfInput =
                document.getElementById(
                    'login-cpf'
                );

            const passwordInput =
                document.getElementById(
                    'login-password'
                );

            const cpf =
                cpfInput.value.replace(/\D/g, '');

            const password =
                passwordInput.value;

            /* LÊ JSON */

            const response = await fetch(
                './data/users.json'
            );

            const users =
                await response.json();

            /* PROCURA USUÁRIO */

            const user = users.find(
                (item) => {

                    return (
                        item.cpf === cpf &&
                        item.password ===
                            password
                    );

                }
            );

            /* VALIDAÇÃO */

            if (!user) {

                alert(
                    'CPF ou senha inválidos'
                );

                return;

            }

            /* SALVA USUÁRIO */

            localStorage.setItem(
                'loggedUser',
                JSON.stringify(user)
            );

            /* REDIRECIONAMENTO */

            switch (user.role) {

                case 'admin':

                    window.location.href =
                        'administrador.html';

                    break;

                case 'coordenador':

                    window.location.href =
                        'coordenador.html';

                    break;

                case 'tutor':

                    window.location.href =
                        'forum-tutor.html';

                    break;

                case 'estudante':

                    window.location.href =
                        'index.html';

                    break;

            }

        }

        /* CRIAR CONTA */

        else {

            alert(
                'Modo demonstração: cadastro desabilitado.'
            );

        }

    }
);