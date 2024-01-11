//Receber como parametro a quantidade de vitorias e derrotas do jogador
///(vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
// vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
recebendoDados()

    function recebendoDados(){
        return new Promise((resolve) => {
            rl.question('Digite o numero de vitórias: ', (numeroDeVitorias) => {
            rl.question('Digite o numero de derrotas: ', (numeroDeDerrotas) => {
                const numeros = {
                numeroDeVitorias: parseFloat(numeroDeVitorias),
                numeroDeDerrotas: parseFloat(numeroDeDerrotas)
                };
                realizarSubtracao(numeros)
                VerificarNivel(numeros)
                resolve(numeros);
                
                rl.close();
            });
            });
        });
        }

    function VerificarNivel(numeros) {
        const resultado = realizarSubtracao(numeros);

        if (resultado <= 10){
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel FERRO`)
        }
        else if( resultado >10 && resultado <=20){
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel BRONZE`)
        }
        else if( resultado > 21 && resultado <= 50){
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel PRATA`)
        }
        else if( resultado > 51 && resultado <=80){
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel OURO`)
        }
        else if( resultado > 81 && resultado <= 90){
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel DIAMANTE`)
        }
        else if( resultado > 91 && resultado <= 100){
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel LENDARIO`)
        }
        else {
            console.log(`o heroi tem o saldo de: ${resultado} e está no nivel IMORTAL`)
        }

    }

    function realizarSubtracao(numeros){
        return numeros.numeroDeVitorias - numeros.numeroDeDerrotas;
        
    }
