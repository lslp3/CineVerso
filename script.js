// Função simples para rastrear cliques nos links de filmes
document.querySelectorAll('.movie-card a').forEach(link => {
    link.addEventListener('click', function(event) {
        alert('Você será redirecionado para o filme!');
    });
});
