import React from 'react';

function App() {
  return (
    <div className="App">
    <h1 className="">Snake Game</h1>
    <canvas id='game' width='400' height='400'></canvas>
    </div>
  );
}

setTimeout(function(){
  const canvas =  document.getElementById('game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  let speed = 7;

  let headX = 10;
  let headY = 10;

  let tileCount = 20;
  let tileSize = canvas.width / tileCount - 2;

  let xVelocity = 0;
  let yVelocity = 0;

  let appleX = 5;
  let appleY = 5;

  function drawGame(){
    clearScreen();
    changeSnakePosition();
    drawSnake();
    drawApple();
    setTimeout(drawGame, 1000/ speed)
}


    function clearScreen(){
      ctx!.fillStyle = 'black';
    ctx?.fillRect(0,0,canvas.width,canvas.height);
    }

    function drawSnake(){
    ctx!.fillStyle = 'limegreen'
    ctx!.fillRect(headX * tileCount, headY* tileCount, tileSize,tileSize);
    }

    function changeSnakePosition(){
      headX = headX + xVelocity;
      headY = headY + yVelocity;
    }

    function drawApple(){
      ctx!.fillStyle = "red";
      ctx!.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
    }

  document.addEventListener('keydown', keyDown);

  function keyDown(event: any){

    if(event.keyCode === 38){
      if(yVelocity === 1)
      return;
      yVelocity = -1;
      xVelocity = 0;
    }

    if(event.keyCode === 40){
      if(yVelocity === -1)
      return;
      yVelocity = 1;
      xVelocity = 0;
    }

    if(event.keyCode === 37){
      if(xVelocity === 1)
      return;
      yVelocity = 0;
      xVelocity = -1;
    }

    if(event.keyCode === 39){
      if(xVelocity === -1)
      return;
      yVelocity = 0;
      xVelocity = 1;
    }
  }

  drawGame();

}, 1);

export default App;

