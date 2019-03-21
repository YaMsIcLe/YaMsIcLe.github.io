console.log(' I have never wanted to die so much in my life');

let draw = SVG('drawing').size(600, 600);
let flowerRadius = 70
let petalRadius = 60


    let petal1 = draw.circle(petalRadius).fill('red').move(80, 100)
    let petal2 = draw.circle(petalRadius).fill('red').move(80, 110)
    let petal3 = draw.circle(petalRadius).fill('red').move(100, 100)
    let petal4 = draw.circle(petalRadius).fill('red').move(100, 100)
    let petal5 = draw.circle(petalRadius).fill('red').move(100, 100)
    let petal6 = draw.circle(petalRadius).fill('red').move(100, 100)
    let petal7 = draw.circle(petalRadius).fill('red').move(100, 100)

    let flower = draw.circle(flowerRadius).fill('yellow').move(100, 100)


