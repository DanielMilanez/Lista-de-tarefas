document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.custom-textarea');

    textarea.addEventListener('focus', function () {
        if (textarea.value === 'Digite algo para adicionar ao seu Bloco de Notas!') {
            textarea.value = '';
            textarea.style.color = 'black'; /* Retorna a cor ao digitar algo */
            textarea.style.fontStyle = 'normal'; /* Retorna ao estilo de fonte normal ao digitar algo */
        }
    });

    textarea.addEventListener('blur', function () {
        if (textarea.value === '') {
            textarea.value = 'Digite algo para adicionar ao seu Bloco de Notas!';
            textarea.style.color = '#999';
            textarea.style.fontStyle = 'italic';
        }
    });
});