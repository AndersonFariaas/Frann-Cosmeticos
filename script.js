/* =====================================================
TOAST
====================================================== */

const toast =
    document.getElementById("toast");


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2800);

}


/* =====================================================
MENU MOBILE
====================================================== */

const navLinks =
    document.getElementById(
        "navLinks"
    );

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "open"
        );

    }
);


/* Fecha menu ao clicar */

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });


/* =====================================================
CARRINHO
====================================================== */

const cartBtn =
    document.getElementById(
        "cartBtn"
    );


cartBtn.addEventListener(
    "click",
    () => {

        showToast(
            "Seu carrinho está pronto para receber seus favoritos."
        );

    }
);


/* =====================================================
FAVORITOS
====================================================== */

const fav =
    document.getElementById(
        "fav"
    );


fav.addEventListener(
    "click",
    () => {

        showToast(
            "Favoritos atualizado. ♡"
        );

    }
);


/* =====================================================
ADICIONAR PRODUTO
====================================================== */

document
    .querySelectorAll(
        ".add-cart"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.textContent =
                    "Adicionado ✓";

                showToast(
                    "Produto adicionado ao carrinho."
                );


                setTimeout(
                    () => {

                        button.textContent =
                            "Adicionar";

                    },
                    1800
                );

            }
        );

    });


/* =====================================================
NEWSLETTER
====================================================== */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        if (email) {

            showToast(
                "Pronto! Bem-vinda ao Clube Frann Cosméticos. ✨"
            );

            newsletterForm.reset();

        }

    }
);
