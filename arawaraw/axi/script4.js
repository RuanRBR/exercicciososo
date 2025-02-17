const pavs = ['bom dia','boa noite','boa tarde','bom dia','bom dia'];
let contagem = {};

for (let palavra of pavs) {
    if (contagem[palavra]) {
        contagem[palavra] += 1;
    } else {
        contagem[palavra] = 1;
    }
}
for (let palavra in contagem) {
    console.log(`${palavra}: ${contagem[palavra]}`);
}