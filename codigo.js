document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.offsetTop;
                window.scrollTo({
                    top: offset - 100, // ajuste o valor conforme necessário para acomodar seu cabeçalho
                    behavior: "smooth"
                });
            }
        });
    });
});

