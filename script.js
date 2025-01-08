document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    const campos = ['nome', 'dataNascimento', 'telefone', 'email'];
    let todosPreenchidos = true;
    const mensagem = document.getElementById('mensagem');

    campos.forEach(function(campo) {
        const input = document.getElementById(campo);
        if (input.value.trim() === '') {
            todosPreenchidos = false;
        }
    });

    if (!todosPreenchidos) {
        mensagem.innerHTML = 'Para continuar é necessário preencher todos os campos!!';
        event.preventDefault(); // Impede o envio do formulário
    } else {
        mensagem.innerHTML = '';
    }
});
