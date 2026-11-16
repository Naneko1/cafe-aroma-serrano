// Recursos compartilhados por todas as páginas do site.
document.addEventListener("DOMContentLoaded", function () {
    // Atualiza automaticamente o ano do rodapé.
    const yearElements = document.querySelectorAll(".current-year");
    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Destaca o link correspondente à página atual.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Abre e fecha o menu em telas menores.
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("is-open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        });

        // Fecha o menu depois que um link é selecionado.
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Abrir menu");
            });
        });
    }

    // Filtro de categorias da página Produtos.
    const filterButtons = document.querySelectorAll(".filter-button");
    const productCards = document.querySelectorAll(".product-card");

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const selectedCategory = button.dataset.filter;

                filterButtons.forEach(function (item) {
                    item.classList.remove("active");
                    item.setAttribute("aria-pressed", "false");
                });

                button.classList.add("active");
                button.setAttribute("aria-pressed", "true");

                productCards.forEach(function (card) {
                    const matches = selectedCategory === "todos" ||
                        card.dataset.category === selectedCategory;
                    card.hidden = !matches;
                });
            });
        });
    }

    // Validação do formulário na página Fale Conosco.
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        const nameInput = document.querySelector("#nome");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#mensagem");
        const feedback = document.querySelector("#form-feedback");

        function showError(input, message) {
            const errorElement = document.querySelector("#erro-" + input.id);
            errorElement.textContent = message;
            input.classList.toggle("input-error", message !== "");
            input.setAttribute("aria-invalid", String(message !== ""));
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Limpa mensagens antigas antes de validar novamente.
            feedback.textContent = "";
            feedback.className = "form-feedback";

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            showError(nameInput, name ? "" : "Por favor, informe seu nome.");
            showError(emailInput, !email
                ? "Por favor, informe seu e-mail."
                : (!isValidEmail(email) ? "Digite um e-mail válido." : ""));
            showError(messageInput, message ? "" : "Por favor, escreva sua mensagem.");

            const formIsValid = name !== "" && isValidEmail(email) && message !== "";

            if (!formIsValid) {
                feedback.textContent = "Confira os campos destacados antes de enviar.";
                feedback.classList.add("feedback-error");
                return;
            }

            feedback.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato, " + name + ".";
            feedback.classList.add("feedback-success");
            contactForm.reset();

            // Remove o estado visual de erro após limpar o formulário.
            [nameInput, emailInput, messageInput].forEach(function (input) {
                showError(input, "");
            });
        });

        // Remove o erro de cada campo quando o usuário começa a corrigi-lo.
        [nameInput, emailInput, messageInput].forEach(function (input) {
            input.addEventListener("input", function () {
                showError(input, "");
            });
        });
    }
});
