import React from 'react';

function App() {
  return (
    <div className="App">
    <h1 className="">Snake Game</h1>
    <canvas id='game' width='400' height='400'></canvas>
    </div>
  );
}
function loaded() {
  const canvas =  document.getElementById('game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  
  function clearScreen(){
    ctx!.fillStyle = 'green';
    ctx?.fillRect(0,0,canvas.width,canvas.height);
}
}

  
  let speed = 7;
  
  function drawGame(){
      console.log('drawgame')
      setTimeout(drawGame, 1000/ speed)
  }
  
drawGame();

export default App;
