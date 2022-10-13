const senha = document.getElementById('senha');
const nome = document.getElementById('usuario');

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    valid = true;

    const senha_value = senha.value;
    const usuario_value = usuario.value;

    if(usuario_value.length <5 || senha_value.length <12){
        alert ('O formulário não foi enviado')
        valid = false
    }

    if (valid)
        alert('Formulário completo');
})
