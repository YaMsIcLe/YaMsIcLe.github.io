console.log(' I have never wanted to die so much in my life');

const canvasWidth = 700
const canvasHeight = 500
const blockWidth = 50
const blockHeight = 25
const rowNumb = 5
const blockNumb = 10
const PINK = '#FFC0CB'
const BLACK = '#000'

let draw = SVG('drawing').size(canvasWidth, canvasHeight);

for (let i = 0; i < rowNumb; i ++){
    let rowA = i * blockHeight;


    for (let j = 0; j < blockNumb; j++){
       let blockA = j * blockWidth;
       
       let rect = {
           element: draw.rect(blockWidth, blockHeight),
           color: PINK
       };

       rect.element.move(blockA, rowA);
       rect.element.stroke(BLACK);
       rect.element.fill(PINK);

    }
}
