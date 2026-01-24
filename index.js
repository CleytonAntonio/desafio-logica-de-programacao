//Desafio proposto pela DIO: Classificador de nível de herói

//Declarção de variáveis
let nomeDoHeroi = "Jesus";
let nivelDeExperiencia = 100000;

// Classificar o nível do heroi pela sua experiência
function classificadorDeHeroi(nomeDoHeroi, nivelDeExperiencia) {
    let classificacao;

    if (nivelDeExperiencia < 1000) {
        classificacao = "Ferro";
    } else if (nivelDeExperiencia <= 2000) {
        classificacao = "Bronze";
    } else if (nivelDeExperiencia <= 5000) {
        classificacao = "Prata";
    } else if (nivelDeExperiencia <= 7000) {
        classificacao = "Ouro";
    } else if (nivelDeExperiencia <= 8000) {
        classificacao = "Platina";
    } else if (nivelDeExperiencia <= 9000) {
        classificacao = "Ascendente";
    } else if (nivelDeExperiencia <= 10000) {
        classificacao = "Imortal";
    } else {
        classificacao = "Radiante";
    }

    return `O Herói de nome ${nomeDoHeroi} está no nível de ${classificacao}`;
}
console.log(classificadorDeHeroi(nomeDoHeroi, nivelDeExperiencia))
