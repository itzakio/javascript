let college = {
    name:"TSCM",
    loc: "Meherpur",
    events: ["science fair", "book fair", "Tree Plantation"],
    bus: 5,
    teachers: {
        bangla: 5,
        english: 2, 
        biology: 1,
        math: 4,
        science:{
            physics: 2,
            chemisty: 1,
            "sub assistent": 1
        }
    },
    merit: "top"

}
// console.log(college);

college.events[1]="Science book fair";
college.teachers.science["sub assistent"] = 2;
college.teachers.science.physics = 3;
delete college.bus; // to delete a property from a object
console.log(college);

