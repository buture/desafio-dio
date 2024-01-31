function calcularSaldoDeRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
  }

  function classificarJogador(saldoDeRankeadas) {
    let nivelDoJogador;
    if (saldoDeRankeadas < 10) {
      nivelDoJogador = "Ferro";
    } else if (saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20) {
      nivelDoJogador = "Bronze";
    } else if (saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50) {
      nivelDoJogador = "Prata";
    } else if (saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80) {
      nivelDoJogador = "Ouro";
    } else if (saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90) {
      nivelDoJogador = "Diamante";
    } else if (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100) {
      nivelDoJogador = "Lendário";
    } else {
      nivelDoJogador = "Imortal";
    }
    return nivelDoJogador;
  }

  let vitoriasDoJogador = 75;
let derrotasDoJogador = 25;
let saldoDeRankeadasDoJogador = calcularSaldoDeRankeadas(vitoriasDoJogador, derrotasDoJogador);
let nivelDoJogador = classificarJogador(saldoDeRankeadasDoJogador);
console.log(`O Herói tem de saldo de ${saldoDeRankeadasDoJogador} está no nível de ${nivelDoJogador}.`);


