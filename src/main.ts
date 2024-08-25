import './style.css';

const INTERVAL_FOR_30_FPS = 33,


 appElement = document.querySelector<HTMLDivElement>('#app');
if(!appElement) {throw new Error('App element not found');}

appElement.innerHTML = `
  <canvas>
   
  </canvas>
    `;

const canvas = document.querySelector("canvas"),
 ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 30;

function getCharactersFromRange(startCode, endCode) {
    const characters = [];
    for (let i = startCode; i <= endCode; i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters;
}

const startCode = 0x3040, // Starting code point
 endCode = 0x309F,   // Ending code point

 characters = getCharactersFromRange(startCode, endCode);

// Const letters=[...Array(26)].map((_,index)=>String.fromCharCode(65+index)).concat(...characters);
const letters = characters,

 drops = [];
for (let i = 0; i < canvas.width / fontSize; i++) {
    drops [i] = 1;
}

function rand(min: number, max: number): number {
    return Math.floor(min + (max - min) * Math.random());
}

function getColor() {
    return `hsl(${  rand(280, 320)  },100%,50%)`;
}

function draw():void {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
        const letter = letters[Math.floor(Math.random() * letters.length)];
        // Ctx.fillStyle="#FE019A";
        ctx.fillStyle = getColor();

        ctx.font = "30px monospace";
        ctx.fillText(letter, fontSize * i, fontSize * drops[i]);

        drops[i]+=1;

        if (drops[i] > canvas.height / fontSize && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }
}


setInterval(draw, INTERVAL_FOR_30_FPS);


