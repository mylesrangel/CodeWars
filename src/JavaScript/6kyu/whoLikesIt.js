// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.


function likes(names) {
    // TODO

    switch(names.length){

        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] +" like this";

        default:
            return names[0] + ", " + names[1] + " and " + (names.length-2) +" others like this";
    }
}


console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');


//BEST PRACTICE
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }




//ANOTHER ONE

// function likes (names) {
//     var templates = [
//       'no one likes this',
//       '{name} likes this',
//       '{name} and {name} like this',
//       '{name}, {name} and {name} like this',
//       '{name}, {name} and {n} others like this'
//     ];
//     var idx = Math.min(names.length, 4);
    
//     return templates[idx].replace(/{name}|{n}/g, function (val) {
//       return val === '{name}' ? names.shift() : names.length;
//     });
//   }


//ANOTHER ONE

// function likes(peopleNames) {
//     var feels = new FeelingsParty('like', 'this');
//     for(var name in peopleNames) feels.addFeeler(new Person(peopleNames[name]));
//     return feels.shareTheseFeelings();
//   }
  
//   function Person(name) {
//    this.name = name;
//   }
  
//   Person.prototype.getName = function() {
//     return this.name;
//   }
  
//   function FeelingsParty(emotion, target) {
//    this.emotionalContext = emotion;
//    this.emotionalSubject = target;
//    this.peopleFeelingThisWay = [];
//    this.numPeopleFeelingThisWay = 0;
//   }
  
//   FeelingsParty.prototype.getEmotionalContext = function() {
//    return this.type;
//   }
  
//   FeelingsParty.prototype.addFeeler = function(person) {
//       this.numPeopleFeelingThisWay++;
//       this.peopleFeelingThisWay.push(person);
//   }
  
//   FeelingsParty.prototype.shareTheseFeelings = function() {
//       this.findTheRightWords();
//       if(this.numPeopleFeelingThisWay == 0) return 'no one ' + this.emotionalContext + ' ' + this.emotionalSubject;
//       if(this.numPeopleFeelingThisWay == 1) return '' + this.peopleFeelingThisWay[0].getName() + ' ' + this.emotionalContext + ' ' + this.emotionalSubject;
//       if(this.numPeopleFeelingThisWay == 2) return '' + this.peopleFeelingThisWay[0].getName() + ' and ' + this.peopleFeelingThisWay[1].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//       if(this.numPeopleFeelingThisWay == 3) return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + this.peopleFeelingThisWay[2].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//       return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + (this.numPeopleFeelingThisWay - 2) + ' others ' + this.emotionalContext + ' ' + this.emotionalSubject;
//   }
  
//   FeelingsParty.prototype.findTheRightWords = function() {
//       if(this.numPeopleFeelingThisWay == 0 || this.numPeopleFeelingThisWay == 1) this.emotionalContext += 's';
//   }