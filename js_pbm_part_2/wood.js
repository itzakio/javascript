// Wood requirements 

function wood (chairQuantity, tableQuantity, bedQuantity){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const chairTotalWood = chairQuantity * chairWood;
    const tableTotalWood = tableQuantity * tableWood;
    const bedTotalWood = bedQuantity * bedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

let chair = 2;
let table = 0;
let bed = 0;


const totalWood = wood(chair, table, bed)
console.log(totalWood);