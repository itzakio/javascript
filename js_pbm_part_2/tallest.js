// Max
let height = [65, 74, 60, 75, 69, 71, 68];

function tallest (numbers){
    let hero = 0;
    let top;
    for (let num of numbers){
        top = num;
        if (top > hero){
            hero = top;
        }
        
    }
    return hero;
}

let hero = tallest(height);
console.log(hero)


// Min

function shortest (numbers){
    let min = height[0];
    for (let num of numbers){
        if (num < min){
            min = num;
        }
        
    }
    return hero;
}

let zero = shortest(height);
console.log(zero)