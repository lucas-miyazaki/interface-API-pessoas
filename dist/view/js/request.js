const url_server = "http://localhost:3000";

function listarPessoas() {
    fetch(`${url_server}/pessoas`)
        .then(response => response.json())
        .then(data => {
            data.forEach(pessoa => {
                console.log(pessoa.endereco);
            });
        });
}

function Cadastrar() {
    console.log("Enviando dados ao servidor...");
    const dados = {
        nome: document.getElementById("nome_Usuario").value,
        cpf: document.getElementById("cpf_Usuario").value,
        dataNascimento: document.getElementById("nascimento_Usuario").value,
        telefone: document.getElementById("telefone_Usuario").value,
        endereco: document.getElementById("endereco_Usuario").value,
        peso: document.getElementById("peso_Usuario").value,
        altura: document.getElementById("altura_Usuario").value
    };
    console.log(dados);
    window.alert(JSON.stringify(dados));

    fetch(`${url_server}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do servidor:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
        });
}
