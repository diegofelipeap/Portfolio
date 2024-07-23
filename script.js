function criarProjeto(numero) {
    const projetos = [
        { titulo: "Jokenpô", descricao: "Pedra, Papel, Tesoura feito em JavaScript, confira!", imagem: "images/jokenpô Inicial.png", link: "https://diegofelipeap.github.io/Game-Jokenpo/" },
        { titulo: "Projeto B", descricao: "Descrição do Projeto B", imagem: "projeto-b.jpg", link: "https://www.linkedin.com/in/pereira-diego-dev/" },
        { titulo: "Projeto C", descricao: "Descrição do Projeto C", imagem: "projeto-c.jpg", link: "https://www.linkedin.com/in/pereira-diego-dev/" },
        { titulo: "Projeto D", descricao: "Descrição do Projeto D", imagem: "projeto-d.jpg", link: "https://www.linkedin.com/in/pereira-diego-dev/" },
        // Adicione mais objetos de projeto aqui se desejar personalizar alguns projetos específicos
    ];

    const projeto = projetos[numero - 1] || {
        titulo: `Projeto ${numero}`,
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagem: "placeholder-image.jpg",
        link: `https://exemplo.com/projeto${numero}`
    };

    return `
        <a href="${projeto.link}" class="projeto" target="_blank" rel="noopener noreferrer">
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-imagem">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </a>
    `;
}

function carregarProjetos(quantidade, total) {
    const projetosGrid = document.querySelector('.projetos-grid');
    for (let i = quantidade; i < Math.min(quantidade + 8, total); i++) {
        projetosGrid.innerHTML += criarProjeto(i + 1);
    }
}

const totalProjetos = 29;
let projetosExibidos = 0;

document.addEventListener('DOMContentLoaded', () => {
    const botaoExibirMais = document.getElementById('exibir-mais');

    function exibirMaisProjetos() {
        carregarProjetos(projetosExibidos, totalProjetos);
        projetosExibidos += 8;

        if (projetosExibidos >= totalProjetos) {
            botaoExibirMais.style.display = 'none';
        }
    }

    // Carrega os primeiros projetos
    exibirMaisProjetos();

    // Adiciona o evento de clique ao botão
    botaoExibirMais.addEventListener('click', exibirMaisProjetos);
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('nav'); // Ajuste aqui caso seu cabeçalho tenha outro seletor

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Adicionar rolagem suave para links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();  // Prevenir o comportamento padrão de âncoras
            const targetId = link.querySelector('a').getAttribute('href').substring(1);  // Obtém o ID da seção alvo
            const targetSection = document.getElementById(targetId);

            // Calcular a posição do título da seção, ajustando pela altura do cabeçalho
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            // Rolar suavemente até a posição do título
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Fechar o menu de navegação após o clique
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
};

// Certificar-se de que o DOM está completamente carregado antes de adicionar eventos
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
});
