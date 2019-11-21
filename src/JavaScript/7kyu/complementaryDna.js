// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)





function DNAStrand(dna){
    
    console.log(typeof(dna));
    console.log(dna);
    console.log(dna[0]);
    console.log(dna.length);
    let newDna = "";

    //loop through dna
    for(let i = 0; i<dna.length; i++){
        //replace each value with their opposite (IE. A <-> C , G <-> T)
        if(dna[i] == "A"){
            newDna += "T";
        }else if(dna[i] == "T"){
            newDna += "A";
        }else if(dna[i] == "G"){
            newDna += "C";
        }else if(dna[i] == "C"){
            newDna += "G";
        }
    }
    
    console.log(newDna)
    return newDna;
}



console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
//console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
//console.log(DNAStrand("GTAT"),"CATA","String GTAT is");


//BEST PRACTICE

// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }



//NEXT IN LINE

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }
