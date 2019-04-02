console.log(' I have never wanted to die so much in my life');

const canvasWidth = 900
const canvasHeight = 500
const blockWidth = 50
const blockHeight = 25
const rowNumb = 10
const blockNumb = 10
const PINK = '#FFC0CB'
const BLACK = '#000'
const xShift = 25
let numbBlock = 10
// if row 10 has 10 rows, and row 9 has 9 blocks, how the HELL DO I DO IT //

let draw = SVG('drawing').size(canvasWidth, canvasHeight);

for (let i = 0; i < rowNumb; i ++){
    let rowA = i * blockHeight;
    let blockRowPer = i + 1

    for (let j = 0; j < blockRowPer; j++){
       let blockA = j * blockWidth;
       
    
       let rect = {
        element: draw.rect(blockWidth, blockHeight),
        color: PINK

       };
       rect.element.move((canvasWidth/2) +(blockA - rowA),(canvasWidth/3.8 + rowA));
       rect.element.stroke(BLACK);
       rect.element.fill(PINK);
       
    }
}
