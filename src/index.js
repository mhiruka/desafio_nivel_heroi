// Defina o nome e a quantidade de experiência (XP) do herói
let nomeDoHeroi = "Ultraman";
let xpDoHeroi = 10; // Exemplo de XP

// Variável para armazenar o nível do herói
let nivelDoHeroi;

// Estrutura de decisão utilizando switch para determinar o nível do herói com base na XP
switch(true) {
    case xpDoHeroi < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";
}

// Exibindo a mensagem com o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
