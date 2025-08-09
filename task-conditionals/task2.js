let myScore = 85;
let friendScore = 60;

if (myScore > 80){
    if (friendScore > 80){
        console.log("go for a lunch")
    }
    else{
        if(friendScore >=60 && friendScore <=80){
            console.log("Good luck next time")
        }
        else{
            if (friendScore >=40 && friendScore < 60){
                console.log("Message unseen")
            }
            else{
                console.log("block your friend")
            }
        }
    }
}
else{
    console.log("go to home and sleep and act sad")
 }
   