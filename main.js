console.log('olá, seja bem vindo ao meu site sobre Tengen Toppa Gurren Lagann, um anime que eu gosto muito e dedico esse projeto')

var acc = document.getElementsByClassName('per');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        var painel = this.nextElementSibling;

        // Se o painel estiver visível, o oculta. Caso contrário, o exibe.
        if (painel.classList.contains('open')) {
            painel.classList.remove('open');  // Fecha o painel
        } else {
            painel.classList.add('open');  // Abre o painel com animação
        }
    });
}

var caixa = document.getElementsByClassName('caixa')

for (let x = 0; x < caixa.length; x++) {
    caixa[x].addEventListener('click', function () {
        var text = this.nextElementSibling;

        if (text.classList.contains('active')) {
            text.classList.remove('active')
            caixa[x].style.borderBottomRightRadius = '10px'
            caixa[x].style.borderBottomLeftRadius = '10px'
        } else {
            text.classList.add('active')
            caixa[x].style.borderBottomRightRadius = '0px'
            caixa[x].style.borderBottomLeftRadius = '0px'
        }
    })
}