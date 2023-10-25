function enviarNota() {
    const avaliacao = document.querySelector('#avaliacao');
    const obrigado = document.querySelector('#obrigado');

    obrigado.classList.add('ativo');
    avaliacao.classList.add('inativo');
}

const botaoEnviar = document.querySelector('#enviar');
const notas = document.querySelectorAll('[data-nota]');
const notaFinal = document.querySelector('#nota');

botaoEnviar.addEventListener('click', enviarNota);

notas.forEach(nota => {
    nota.addEventListener('click', (event) => {
        notaClicada = event.target.dataset.nota;

        notaFinal.innerHTML = notaClicada;

        if (nota.classList.contains('selecionado')) {
            nota.classList.remove('selecionado');
        } else {            
            notas.forEach(botao => botao.classList.remove('selecionado'));
            nota.classList.add('selecionado');
        }
    })
})
