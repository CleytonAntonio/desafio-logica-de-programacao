// Classificador de nível de herói

let nomeDoHeroi = "Jesus"
let nivelDeExperiencia = 10001
let verificarNivelDoHeroi = 0

// Verificação do nível do Heroi
// Escolhi utilizar o switch case por conta da quantidade de verificações

switch (nivelDeExperiencia){
    case (nivelDeExperiencia < 1000):
        nivelDeExperiencia = "Ferro"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
        break
    case (nivelDeExperiencia >= 1001) && (nivelDeExperiencia <= 2000):
        nivelDeExperiencia = "Bronze"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
        break
    case (nivelDeExperiencia >= 2001) && (nivelDeExperiencia <= 5000):
        nivelDeExperiencia = "Prata"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
        break
    case (nivelDeExperiencia >= 5001) && (nivelDeExperiencia <= 7000):
        nivelDeExperiencia = "Ouro"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
        break
    case (nivelDeExperiencia >= 7001) && (nivelDeExperiencia <= 8000):
        nivelDeExperiencia = "Platina"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
        break
    case (nivelDeExperiencia >= 8001) && (nivelDeExperiencia <= 9000):
        nivelDeExperiencia = "Ascendente"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
        break
    case (nivelDeExperiencia >= 9001) && (nivelDeExperiencia <= 1000):
        nivelDeExperiencia = "Imortal"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
         break
    default:
        nivelDeExperiencia = "Radiante"
        console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDeExperiencia)
 }