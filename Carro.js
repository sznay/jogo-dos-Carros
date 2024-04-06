//codigo do carro

let xCarros = [720, 720, 720, 720, 720, 720];
let yCarros = [40, 100, 150, 210, 265, 318];
let velocidadeCarros = [2, 2.5, 3, 4, 2.5, 3.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
  
  function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    }
  }

  function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
     if (passouTodaATela(xCarros[i])){
      xCarros[i] = 720;
    } 
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}