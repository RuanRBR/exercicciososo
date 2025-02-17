const alunos = [
    { aluno: 'joao', nota: 10 },
    { aluno: 'maria', nota: 6 },
    { aluno: 'mateus', nota: 8 },
    { aluno: 'diego', nota: 7 },
];

let somaNotas = 0;

alunos.forEach(aluno => {
    somaNotas += aluno.nota;
});

console.log("A soma das notas é:", somaNotas);
