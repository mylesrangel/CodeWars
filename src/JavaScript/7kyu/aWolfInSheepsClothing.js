function warnTheSheep(queue) {

    const wolfFound = "Pls go away and stop eating my sheep";

    let sheepPosition = 0;
    let counter = queue.length -1;

    //loop through the queue and find the wolf.
    for(let i = counter; i >= 0; i--){
        //if wolf is at the end of the queue return wolf found string
        if(queue[i] == "wolf" && i == counter){
            return wolfFound;
        }else if (queue[i] == "wolf"){
            //inform the sheep of the wolf
            return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
        }
        sheepPosition++;
    } 
}

      console.log((warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])));
      console.log((warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!"));
      console.log((warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!"));
      console.log((warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!"));
      console.log((warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep"));
