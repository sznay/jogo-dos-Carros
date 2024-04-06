//códigoator
let xAtor= 90;
let yAtor = 369;
let colisão = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 30, 30);
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor += 3;
      }
      
    }
  }

  function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i  + 1){
    colisão = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisão){
     voltaAtorParaPosicaoInicial();
     somDaColisao.play();
     if (pontosMaiorQueZero()){
      meusPontos -= 1;
     }
     
    }
  }
  }

  function voltaAtorParaPosicaoInicial(){
    yAtor = 366;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(30)
    fill(color(255, 240, 60))
    text(meusPontos, width /5, 28)
  }

  function marcaPonto(){
    if (yAtor < 15){
      meusPontos +=1;
      somDoPonto.play();
      voltaAtorParaPosicaoInicial();
    }
  }

  function pontosMaiorQueZero(){
    return meusPontos > 0
  }

  function podeSeMover(){
    return yAtor < 369;
  }