console.log('olá, seja bem vindo ao meu site sobre Tengen Toppa Gurren Lagann, um anime que eu gosto muito e dedico esse projeto')

var acc = document.getElementsByClassName('per');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        var painel = this.nextElementSibling;
        
        // Se o painel estiver visível, o oculta. Caso contrário, o exibe.
        if (painel.classList.contains('open')) {
            painel.classList.remove('open');  // Fecha o painel
        } else {
            painel.classList.add('open');  // Abre o painel com animação
        }
    });
}