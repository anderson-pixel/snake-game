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

  let headX = 10;
  let headY = 10;

  let tileCount = 20;
  let tileSize = canvas.width / tileCount - 2;

  let xVelocity = 0;
  let yVelocity = 0;

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

    let speed = 7;

  
  function drawGame(){
      clearScreen();
      changeSnakePosition();
      drawSnake();
      setTimeout(drawGame, 1000/ speed)
  }

  document.addEventListener('keydown', keyDown);

  function keyDown(event: any){

    if(event.keyCode === 38){
      yVelocity = -1;
      xVelocity = 0;
    }

    if(event.keyCode === 40){
      yVelocity = 1;
      xVelocity = 0;
    }
  }

  drawGame();

}, 1);

export default App;

