function criarProjeto(numero) {
    const projetos = [
        { titulo: "Cadastro de Usuários", descricao: "Aplicação de registro criado em React com React Rooks e Styled-Components", imagem: "images/userRegistration.webp", link: "https://user-registration-woad.vercel.app" },
        { titulo: "API de Cadastro", descricao: "Back-End da aplicação Cadastro de Usuários, feita em Node.js", imagem: "images/API-user.webp", link: "https://github.com/diegofelipeap/api-de-usuarios-node" },
        { titulo: "Coinversor", descricao: "Conversor de Moedas em tempo real feito em JavaScript, HTML e CSS e API de terceiros", imagem: "images/coverCoinversor.webp", link: "https://diegofelipeap.github.io/Conversor-de-Moeda/" },
        { titulo: "Meu LinkTree", descricao: "Site responsivo criado em HTML e CSS", imagem: "images/Linktree.webp", link: "https://diegofelipeap.github.io/LinkTree-dev/" },
        { titulo: "LinkTree (Cliente)", descricao: "LinkTree desenvolvido para cliente. Site responsivo criado em HTML e CSS", imagem: "images/previewlinktree.webp", link: "https://consultor-ryann.vercel.app" },
        { titulo: "DevBot", descricao: "ChatBot criado em HTML, CSS e JavaScript. Consome API da OpenAI", imagem: "images/devbot.webp", link: "https://devbot-dp.netlify.app" },
        { titulo: "Sorteador", descricao: "Sorteador de números e nomes em tempo real criado em JavaScript, CSS e HTML", imagem: "images/sorteador.webp", link: "https://diegofelipeap.github.io/Sorteador/" },
        { titulo: "Jokenpô", descricao: "Pedra, Papel, Tesoura Criado em HTML, CSS e JavaScript", imagem: "images/jokenpo.webp", link: "https://diegofelipeap.github.io/Game-Jokenpo/" },
        { titulo: "Enfoco - Portal de Notícias", descricao: "Landing Page criada em HTML e CSS", imagem: "images/efo.webp", link: "https://diegofelipeap.github.io/EFO---Mundiware/" },
        { titulo: "Massa! - Portal de Notícias", descricao: "Landing Page criada em HTML e CSS", imagem: "images/massa.webp", link: "https://diegofelipeap.github.io/Massa-/" },
        { titulo: "Analyx", descricao: "Página de Social Media criada em JavaScript, HTML e CSS", imagem: "images/analyx.webp", link: "https://analix.netlify.app" },
        { titulo: "Starbucks", descricao: "Landin Page criada em JavaScript, HTML e CSS", imagem: "images/starbucks.webp", link: "https://diegofelipeap.github.io/starbucks/" },
        { titulo: "Super Mario", descricao: "Site criado em HTML CSS e JavaScript", imagem: "images/superMario.webp", link: "https://site-supermariobydiego-dev.netlify.app" },
        { titulo: "Microsoft Page", descricao: "Landing Page da Microsoft criada em HTML, CSS e Bootstrap", imagem: "images/microsoft-project.webp", link: "https://diegofelipeap.github.io/Microsoft-Page/#" },
        { titulo: "Itaú Page", descricao: "Landing Page do banco Itaú feito em React com React Rooks e Styled-Components", imagem: "images/itau.webp", link: "https://banco-itau-liard.vercel.app" },
        { titulo: "Menu Hamburgueria", descricao: "Criado em HTML, CSS e JavaScript, com funções map, reduce e filter", imagem: "images/menu-burgueria.webp", link: "https://diegofelipeap.github.io/Menu-Hamburgueria/" },
        { titulo: "RDR Login - RockStar", descricao: "Tela de Login com arte do Red Dead Redemption feita com HTML, CSS e JavaScript", imagem: "images/RDR.webp", link: "https://diegofelipeap.github.io/Tela-Login-RDR-/" },
        { titulo: "We Care", descricao: "Página de Petshop feita em HTML e CSS", imagem: "images/wecare.webp", link: "https://wecaresitebydiegopereira.netlify.app" },
        { titulo: "Easy Shopping", descricao: "Página feita em HTML e CSS", imagem: "images/easeShopping.webp", link: "https://easyshoppingbydiegopereira.netlify.app" },
        { titulo: "FlexiLease Autos", descricao: "Repositório da API criada em Node.js", imagem: "images/flexiliease.webp", link: "https://github.com/diegofelipeap/flexilease-autos" },
        { titulo: "VetClinic", descricao: "Repositório da API criada em Node.js", imagem: "images/vetclinic.webp", link: "https://github.com/diegofelipeap/Projeto-VetClinic" },
        { titulo: "API Video Manager", descricao: "Repositório da API criada em Node.js", imagem: "images/video-manager.webp", link: "https://github.com/diegofelipeap/manager-video-api-node" }
        //Adicionar mais projetos
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

const totalProjetos = 22; //atualizar valor para manutenção.
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
