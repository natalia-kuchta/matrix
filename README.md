# Matrix
Matrix is a visually engaging web project that simulates a dynamic character rain effect inspired by the iconic visuals of "The Matrix." Built using TypeScript, CSS, and Vite, this project demonstrates efficient canvas manipulation, random character generation, and color variation.

# Start the development server:

```bash
Copy code

npm run dev
```
The application will be available at http://localhost:3000.


# Features

```
TypeScript:
Leveraging TypeScript for strong typing and modern JavaScript features.

Canvas API: 
Utilizes the HTML5 Canvas API for rendering a fluid, animated character rain effect.

Dynamic Character Set: 
Includes characters from a specific UTF-8 range, creating a unique and customizable visual experience.

Vite: 
Fast development and optimized build process with Vite.
```

# Code Overview


This project draws characters from a specified UTF-8 range on a canvas, creating a dynamic "Matrix-like" visual effect:

```typescript
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 30;

function getCharactersFromRange(startCode: number, endCode: number): string[] {
    let characters = [];
    for (let i = startCode; i <= endCode; i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters;
}

const startCode = 0x3040; // Starting code point for characters
const endCode = 0x309F;   // Ending code point for characters

const characters = getCharactersFromRange(startCode, endCode);

const drops = Array(canvas.width / fontSize).fill(1);

function rand(min: number, max: number): number {
    return Math.floor(min + (max - min) * Math.random());
}

function getColor(): string {
    return `hsl(${rand(280, 320)}, 100%, 50%)`;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
        const letter = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = getColor();
        ctx.font = "30px monospace";
        ctx.fillText(letter, fontSize * i, fontSize * drops[i]);

        drops[i]++;

        if (drops[i] > canvas.height / fontSize && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 33);
```

# Screenshot

![pink_matrix.png](src%2Fpink_matrix.png)

![matrix.png](src%2Fmatrix.png)