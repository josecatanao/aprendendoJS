function criaPesssoa(nome,sobrenome,idade){
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPesssoa("Luiz","Miranda",27);
const pessoa2 = criaPesssoa("José","catanao",25);
const pessoa3 = criaPesssoa("Pedro","Junior",29);

console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa3.idade);