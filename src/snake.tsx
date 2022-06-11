window.onload = function () {
    const getCanvasElementById = (id: string): HTMLCanvasElement => {
        const canvas = document.getElementById(id);
    
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error(`The element of id "${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`);
        }
    
        return canvas;
    }
}

let speed = 7;

function drawGame(){
    console.log('drawgame')
    setTimeout(drawGame, 1000/ speed)
}

drawGame();

export {}