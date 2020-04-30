var vowels = [97, 101, 105, 111, 117, 121]

$(".dropdown-menu a").click(function(){
    $("#btnGroupDrop1").html($(this).text());
    pigLatin();
  });

document.getElementById("translate").addEventListener("click", 
() => 
    pigLatin()
);

pigLatin = () => {
    let text = document.getElementById("en_to_pig").value;
    if(text)
        text = translate(text);
    document.getElementById("output").value = text;
}

translate = (text) => {
    let words = text.split(' ');

    words = words.filter(function(word) {
        return word != '' ;
    });
    console.log(words);
    
    words.forEach((word, i, self) => {
        self[i] = checkForLetters(word.toLowerCase());
    });
    return words.join(" ");
}

checkForLetters = (word) => {
    let letters = word.split("");

    if(letters.every(checkForIndex)) {
         return toPigLatin(letters);
    }
    return word;
}

checkForIndex = (letter) => {
    return ((letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122))
}

toPigLatin = (letters) => {
    let firstVowelIndex = letters.findIndex(firstVowel);

    let fromFirstVowel = letters.slice(firstVowelIndex);
    let beforeFirstVowel = letters.slice(0, firstVowelIndex);

    let pigLatinArray
    if(firstVowelIndex == 0)
        pigLatinArray = fromFirstVowel.concat(beforeFirstVowel, $("#btnGroupDrop1").html().trim());
    else
        pigLatinArray = fromFirstVowel.concat(beforeFirstVowel, 'ay');

    let word = '';
    pigLatinArray.forEach((letter) =>{
        word += letter;
    });

    return word;
}

firstVowel = (letter) => {
    return vowels.includes(letter.charCodeAt(0));
}