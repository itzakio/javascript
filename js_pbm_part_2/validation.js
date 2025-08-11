function fullName (first, last){
    let full;
    if (/^[a-zA-Z]+$/.test(first) && /^[a-zA-Z]+$/.test(last)){
        full = first + " " + last;
    }
    else{
        full = "Plz Letters only"
    }
    
    return full;
}

let name = fullName("Akash", "Ahmed");
console.log(name);