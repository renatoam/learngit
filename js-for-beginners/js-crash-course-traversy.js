// Console
console.log('testando o log');
console.error("testando o error");
console.warn('testando o warn');

// Var, Let, Const
var vvar; // tem escopo global; uma vez declarada, está disponível em todo script;
let llet; // Só fica disponível no escopo em que foi declarada;
const cconst = 'constante'; // Só fica disponível em seu escopo e não pode ter seu valor alterado. Não pode ser declarada sem atribuição. Atribuição deve ser feita já na declaração;

/* 
Hoisting:
Uma variável declarada com var (somente declaração) automaticamente é "enviada" ao topo do script pelo JS (a menos que lhe tenha sido atribuído algum valor), desse modo, podemos inicialização uma variável "antes" de sua declaração. Não serve para let e const.
*/

// Data Types
let stringue = "String" // String
let numbero = 10 // Number
let booleano = true // Boolean
let taxa = 3.5 // Number
let nulo = null // object 
let indefinido = undefined // undefined
let indef // undefined
let array = [] // object
let objeto = {}; // object

// Operador TypeOf - Descobrir o tipo da variável
console.log(typeof stringue);
console.log(typeof numbero);
console.log(typeof booleano);
console.log(typeof taxa);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof indef);
console.log(typeof array);
console.log(typeof objeto);

// Concatenar Strings
console.log("Isso é uma " + stringue);
// Template Script
console.log(`Isso é uma ${stringue}!`);

// Métodos e Propriedades String
const msg = "Renato Alves de Melo";
let val; 

// Length
val = msg.length;
console.log(val);
// Case
val = msg.toUpperCase();
console.log(val);
val = msg.toLowerCase();
console.log(val);
// Substring
console.log(val.substring(0, 6));
// Transformando em Array
console.log(val = msg.split(""));

// ARRAYS
const numeros = [1,2,3,4,5,6];
const cores = ['azul','amarelo','vermelho','verde','roxo','laranja'];
console.log(numeros, cores);

// Pegando itens específicos
console.log(numeros[3]);
console.log(cores[4]);

// Adicionando valores
cores[6] = 'branco';
console.log(cores);
cores.push('marrom'); // adiciona ao final
console.log(cores);
cores.unshift('preto'); // adiciona ao início
console.log(cores);
cores.pop(); // remove o último valor;
console.log(cores);

// Checando se é Array
console.log(Array.isArray(numeros)); // true/false

// Descobrir index(índice) do item no array
console.log(cores.indexOf('verde'));

// OBJETOS

const pessoa = {
    nome: 'Renato',
    idade: '27',
    hobbies: ['filmes', 'futebol', 'desenho','livro'],
    endereco: {
        logradouro: 'Rua Prudente de Moraes, 49',
        bairro: 'Jardim Belval',
        cidade: 'Barueri'
    }
}

console.log(pessoa.nome);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.bairro);

// Adicionando uma propriedade
pessoa.email = 'renato@gmail.com';
console.log(pessoa.email);

// Array de Objetos
const tarefas = [
    {
        id: 1,
        descricao: 'estudar',
        status: true
    },
    {
        id: 2,
        descricao: 'comprar itens',
        status: false
    },
    {
        id: 3,
        descricao: 'ver GOT',
        status: false
    }
];

console.log(tarefas[2].descricao);

// Convertendo pra JSON
console.log(JSON.stringify(tarefas));

// LOOPS

// for
for (let i = 0; i <= 3; i++) {
    console.log(`For para i: ${i}`);
}

// while
let i = 0;
while (i <= 3) {
    console.log(`While para i: ${i}`);
    i++;
}

// Loops através de arrays
// for
for (i = 0;i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].descricao}`);
}

// for ...of
for (let tarefa of tarefas) {
    console.log(tarefa.descricao);
}

// HIGH ORDER FUNCTIONS

// forEach - Faz um loop através do array
tarefas.forEach(function (tarefa) { 
    console.log(`Descrição da Tarefa: ${tarefa.descricao}`);
});

// Map - Te permite criar um novo array de array
let descTarefa = tarefas.map(function(tarefa){ // a variavel recebe o retorno da função, ou seja, o novo array
    return tarefa.descricao; // o array é composto das descrições das tarefas
});

console.log(descTarefa); 

// Filter - Permite criar um novo array a partir de uma condição
let status = tarefas.filter(function (tarefa) { // a variável recebe o array filtrado
    return tarefa.status === false; // só busca tarefas as quais o status é falso
}); 

console.log(status);

// Filter com Map - cria um array a partir de um array com filtro
let task = tarefas.filter(function(tarefa){
    return tarefa.status == false;
}).map(function(tar){
    return tar.descricao;
});

console.log(task);

// ARROW FUNCTIONS

// Função normal
function soma (v1, v2) { 
    return v1 + v2;
}

console.log(soma(1,2));

// Arrow
// (v1,v2) => v1 + v2; - Só isso é o suficiente
let multi = (v1,v2) => v1 + v2; // Mas podemos armazenar o valor em uma variável

console.log(multi(3,4)); // a variável se torna uma função

// CONSTRUCTOR FUNCTIONS

function Filme(titulo, lancamento, diretor) { // Capitalize sempre; os parâmetros recebem os valores que serão atribuidos às propriedades
    this.titulo = titulo;
    this.lancamento = new Date(lancamento); 
    this.diretor = diretor;
    this.ano = function(){
        return this.lancamento.getFullYear(); // podemos criar um método na declaração do objeto
    }
};

// instanciando o objeto
let avengers = new Filme('Vingadores: Ultimato', '04/27/2019', 'Russo Brothers');
let lja = new Filme('Liga da Justiça','10/27/2017','Zack Snyder/Joss Whedon');
console.log(avengers.ano());
console.log(lja.diretor);

function Pessoa(nome, sobrenome, funcao, nasc) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.funcao = funcao;
    this.nasc = new Date(nasc); // podemos definir um tipo da propriedade (transforma em data)
};

let pessoa1 = new Pessoa('Renato', 'Melo','Front','3/3/1992');
console.log(pessoa1.nasc.getFullYear()); // Podemos pegar o ano específico (ou outra coisa) usando um método de datas

// Podemos usar prototypes para adicionar métodos ao objeto
Pessoa.prototype.nomeCompleto = function () { 
    return `${this.nome} ${this.sobrenome}`;
};

console.log(pessoa1.nomeCompleto());

// Nós podemos fazer as mesmas coisas feitas acima, mas de uma forma mais simples, usando Class

// CLASSES (Orientação ao Objeto - básico)

class Jogador {
    constructor (nome, posicao, numero, nasc) { // os parametros são passados no método constructor da classe
        this.nome = nome;
        this.posicao = posicao;
        this.numero = numero;
        this.nasc = new Date(nasc);
    }

    anoNasc = function() {
        return this.nasc.getFullYear();
    }
}

// MANIPULANDO O DOM
// let items = document.querySelector('.items');
// let last = document.createElement('li')
// last.innerText = 'remover';
// items.append(last);


// items.firstElementChild.textContent = 'TextContent';
// items.children[1].innerText = 'InnerText';
// items.lastElementChild.innerHTML = '<a href="#">InnerHTML</a>';
// items.removeChild(last);

// USANDO FORMULÁRIO
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgBox = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput === "" || emailInput === "") {
        msgBox.classList.add('error');
        msgBox.innerHTML = "Por favor, insira nome e email!";

        setTimeout(() => msgBox.remove(), 3000);
    } else {
        const li = document.createElement('li');
        // Adicionando Text Node com input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = "";
        emailInput.value = "";
    }
}
