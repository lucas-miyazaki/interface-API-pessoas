"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    dataNascimento;
    telefone;
    endereco;
    altura;
    peso;
    constructor(_nome, _cpf, _dataNascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.dataNascimento = _dataNascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    /**
     * Atribui o Nome da pessoa
     *
     * @param _nome
     * Nome da pessoa
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    /**
     * Atribui o Cpf da pessoa
     *
     * @param _cpf
     * Cpf da pessoa
     */
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getCpf() {
        return this.cpf;
    }
    /**
     * Atribui a data nascimento da pessoa
     *
     * @param _dataNascimento
     * Data de Nascimento da pessoa
     */
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getTelefone() {
        return this.telefone;
    }
    /**
     * Atribui o endereço da pessoa
     *
     * @param _endereco
     * Endereço da pessoa
     */
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getEndereco() {
        return this.endereco;
    }
    /**
     * Atribui a altura da pessoa
     *
     * @param _altura
     * Altura da pessoa
     */
    setAltura(_altura) {
        this.altura = _altura;
    }
    getAltura() {
        return this.altura;
    }
    /**
     * Atribui o peso da pessoa
     *
     * @param _peso
     * Peso da pessoa
     */
    setPeso(_peso) {
        this.peso = _peso;
    }
    getPeso() {
        return this.peso;
    }
    // Implementação de métodos  
    Falar() {
        // Logica de negócio
        console.log(`${this.nome} está falando!`);
    }
    FalarFrase(_frase) {
        // Lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    Andar() {
        // Logica de negócio
        console.log(`${this.nome} está caminhando`);
    }
    AndarQuilometros(_quilometros) {
        setTimeout(() => {
            // Lógica de negócio
            console.log(`${this.nome} está caminhou ${_quilometros} Km`);
        }, 3000);
    }
    Comer() {
        // Logica de negócio
        console.log(`${this.nome} está comendo`);
    }
    ComerComida(_prato) {
        // Lógica de negócio
        console.log(`${this.nome} está comendo ${_prato}`);
    }
    mostrarPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.dataNascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso};
        `);
    }
    cadastroPessoa(Jubileu) {
        // Persistindo os dados
        console.log(`${Jubileu.nome} cadastrado com sucesso`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map