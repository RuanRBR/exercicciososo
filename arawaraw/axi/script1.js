const prompt = require('prompt-sync')();

let saldo = 1000;
let opcao;

do {
    console.log("\nMenu do Banco");
    console.log("1 - Ver saldo");
    console.log("2 - Sacar");
    console.log("3 - Depositar");
    console.log("4 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            console.log("Seu saldo é: R$" + saldo);
            break;

        case '2':  
            let saque = Number(prompt("Digite o valor para saque: "));
            
            if (saque > saldo) {
                console.log("Saldo insuficiente!");
            } else {
                saldo -= saque;
                console.log("Saque realizado com sucesso! Novo saldo: R$" + saldo);
            }
            break;

        case '3':
            let deposito = Number(prompt("Digite o valor para depósito: "));
            saldo += deposito;
            console.log("Depósito realizado com sucesso! Novo saldo: R$" + saldo);
            break;

        case '4':
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
    }

} while (opcao !== '4');
